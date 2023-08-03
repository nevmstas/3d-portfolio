interface IBadge {
    bgColor: string
    title: string
}

const Badge = ({ bgColor, title }: IBadge) => {
    return <div className={`${bgColor} rounded-xl text-white text-[14px] text-center px-2`}>
        {title}
    </div>
}

export default Badge