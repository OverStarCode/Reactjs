import PropTypes from 'prop-types';

function SkillCard({ icon: Icon, name }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105">
      <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
    </div>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired
};

export default SkillCard;