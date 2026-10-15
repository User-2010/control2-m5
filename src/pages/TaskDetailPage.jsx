import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import korzina from '../img/korzina.svg';
import Vector from '../img/Vector.svg';

const TaskDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState(null);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const foundTask = savedTasks.find(t => String(t.id) === String(id));

        if (foundTask) {
            setTask(foundTask);
        } else {
            setTask({
                id: id,
                title: 'Приготовить обед',
                description: 'Выполнить домашнее задание четко по дизайну и по указанному условию, сделать всё на высшем уровне чтобы препод просто офигел от твоей дзки...',
                priority: 'Normal'
            });
        }
    }, [id]);

    const handleDelete = () => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const filteredTasks = savedTasks.filter(t => String(t.id) !== String(id));
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
        navigate('/');
    };

    const handleEdit = () => {
        navigate(`/edit/${id}`);
    };

    if (!task) return <div style={{ padding: '40px', textAlign: 'center' }}>Загрузка...</div>;

    return (
        <div style={{ padding: '40px 60px', maxWidth: '800px', margin: '0 auto', fontFamily: 'inherit', color: '#1f2937' }}>
            <Link to="/" style={{ display: 'inline-block', color: '#2563eb', textDecoration: 'none', fontSize: '14px', marginBottom: '20px' }}>
                &lsaquo; Назад
            </Link>

            <div style={{ background: '#ffffff', border: '1px solid #d1d5db', borderRadius: '16px', padding: '28px 32px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: '#1f2937' }}>
                        №{task.id} {task.title}
                    </span>
                    <span style={{ backgroundColor: '#10b981', color: '#ffffff', fontSize: '12px', fontWeight: '500', padding: '4px 12px', borderRadius: '12px', textTransform: 'capitalize' }}>
                        {task.priority || 'Normal'}
                    </span>
                </div>

                <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5', marginBottom: '32px' }}>
                    {task.description}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button onClick={handleDelete} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="Удалить">
                        <img src={korzina} alt="Удалить" style={{ width: '20px', height: '20px' }} />
                    </button>
                    <button onClick={handleEdit} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }} title="Редактировать">
                        <img src={Vector} alt="Редактировать" style={{ width: '18px', height: '18px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskDetailPage;