import React from 'react';
import { Link } from 'react-router-dom';

const TaskCard = ({ task, index, onDelete }) => {
    const getPriorityClass = (priority) => {
        if (!priority) return 'priority-normal';
        const p = priority.toLowerCase();
        if (p === 'high') return 'priority-high';
        if (p === 'middle' || p === 'medium') return 'priority-middle';
        return 'priority-normal';
    };

    return (
        <div className="task-card">
            <div className="task-card-header">
                {/* Используем index + 1 для красивой нумерации №1, №2 и т.д. */}
                <span className="task-card-id">№{index + 1} {task.title}</span>
                <span className={`task-priority-badge ${getPriorityClass(task.priority)}`}>
                    {task.priority || 'Normal'}
                </span>
            </div>

            <p className="task-card-desc">
                {task.description}
            </p>

            <div className="task-card-actions">
                <Link to={`/tasks/${task.id}`} className="task-btn open-btn">
                    Открыть
                </Link>
                <button 
                    onClick={() => onDelete(task.id)} 
                    className="task-btn delete-btn"
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default TaskCard;