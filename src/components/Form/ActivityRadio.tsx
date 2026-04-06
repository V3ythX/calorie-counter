import React from 'react';

interface ActivityRadioProps {
  selectedActivity: 'min' | 'low' | 'mid' | 'high' | 'very-high';
  onChange: (activity: 'min' | 'low' | 'mid' | 'high' | 'very-high') => void;
}

const ActivityRadio: React.FC<ActivityRadioProps> = ({ selectedActivity, onChange }) => {
  const activities = [
    { id: 'min' as const, label: 'Минимальная', description: 'Сидячая работа, отсутствие физических нагрузок' },
    { id: 'low' as const, label: 'Низкая', description: 'Редкие, нерегулярные тренировки, активность в быту' },
    { id: 'mid' as const, label: 'Средняя', description: 'Тренировки 3-5 раз в неделю' },
    { id: 'high' as const, label: 'Высокая', description: 'Тренировки 6-7 раз в неделю' },
    { id: 'very-high' as const, label: 'Очень высокая', description: 'Больше 6 тренировок в неделю и физическая работа' }
  ];

  return (
    <>
      {activities.map(activity => (
        <div className="form__radio" key={activity.id}>
          <input
            type="radio"
            name="activity"
            id={activity.id}
            checked={selectedActivity === activity.id}
            onChange={() => onChange(activity.id)}
          />
          <label className="text" htmlFor={activity.id}>
            {activity.label}
            <span className="text-light">{activity.description}</span>
          </label>
        </div>
      ))}
    </>
  );
};

export default ActivityRadio;