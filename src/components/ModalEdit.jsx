import React, { useState, useEffect } from 'react';

const ModalEdit = ({ isOpen, task, onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Normal');

    useEffect(() => {
        if (task) {
            setTitle(task.title || '');
            setDescription(task.description || '');
            setPriority(task.priority || 'Normal');
        }
    }, [task]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...task,
            title,
            description,
            priority,
        });
        onClose();
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', width: '400px' }}>
                <h3>Редактировать задачу</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Название"
                        style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Описание"
                        style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ccc', height: '80px' }}
                    />
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ccc' }}
                    >
                        <option value="Normal">Normal</option>
                        <option value="Middle">Middle</option>
                        <option value="High">High</option>
                    </select>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '10px' }}>
                        <button type="button" onClick={onClose} style={{ padding: '8px 16px', cursor: 'pointer' }}>Отмена</button>
                        <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalEdit;