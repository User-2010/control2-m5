import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
    title: yup.string().required('*Укажите название'),
    description: yup.string().required('*Укажите описание'),
    priority: yup.string().required('*Укажите приоритет'),
});

const TaskForm = ({ onAddTask }) => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: '',
            description: '',
            priority: '',
        },
    });

    const selectedPriority = watch('priority');

    const onSubmit = (data) => {
        const newTask = {
        title: data.title,
            description: data.description,
        priority: data.priority,
            status: false,
        };

        if (onAddTask) {
            onAddTask(newTask);
        }

        reset();
    };

    return (
        <div className=" container task-form-container">
            <h2 className="task-form-title">Задачи</h2>
            <h3 className="task-form-subtitle">Форма добавления</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="task-form-inputs-row">
                    <div className="task-input-group">
                        <input
                            type="text"
                            placeholder="Название"
                            {...register('title')}
                            className="task-input"
                        />
                        {errors.title && (
                            <span className="task-error-text">{errors.title.message}</span>
                        )}
                    </div>

                    <div className="task-input-group">
                        <input
                            type="text"
                            placeholder="Описание"
                            {...register('description')}
                            className="task-input"
                        />
                        {errors.description && (
                            <span className="task-error-text">{errors.description.message}</span>
                        )}
                    </div>

                    <div className="task-input-group">
                        <div className="priority-picker">
                            <span className="priority-label">Приоритет</span>

                            <button
                                type="button"
                                onClick={() => setValue('priority', 'Normal', { shouldValidate: true })}
                                className={`priority-btn normal ${selectedPriority === 'Normal' ? 'active' : ''}`}
                            >
                                Normal
                            </button>

                            <button
                                type="button"
                                onClick={() => setValue('priority', 'Middle', { shouldValidate: true })}
                                className={`priority-btn middle ${selectedPriority === 'Middle' ? 'active' : ''}`}
                            >
                                Middle
                            </button>

                            <button
                                type="button"
                                onClick={() => setValue('priority', 'High', { shouldValidate: true })}
                                className={`priority-btn high ${selectedPriority === 'High' ? 'active' : ''}`}
                            >
                                High
                            </button>
                        </div>

                        {errors.priority && (
                            <span className="task-error-text">{errors.priority.message}</span>
                        )}
                    </div>
                </div>

                <div>
                    <button type="submit" className="task-submit-btn">
                        Создать задачу
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;