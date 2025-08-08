interface SummaryCardProps {
  value: number;
  description: string;
  icon: React.ReactNode;
}

const SummaryCard = ({ value, description, icon }: SummaryCardProps) => {
  return (
    <div className='summary-card u-border u-border-rounded-md u-text-center u-box-shadow'>
      <div className='u-flex u-flex-col u-gap-sm'>
        {icon}
        <h3 className='summary-card__title'>{value}</h3>
        <p className='summary-card__description'>{description}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
