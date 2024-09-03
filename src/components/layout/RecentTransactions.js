function RecentTransactions({ items }) {
    return (
        <>
            {items.map((item, index) => (
                <p key={index}>{item.transacao}</p>
            ))}
        </>
    );
}

export default RecentTransactions;
