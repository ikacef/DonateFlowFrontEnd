import  'react';
import "../styles/wallet.css"

const Wallet = () => {
    const user = {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        memberSince: "March 2023",
    };

    const balances = {
        debit: 245.50,
        crypto: 0.0345,
    };

    const transactions = [
        {
            id: 1,
            date: "2025-04-10",
            charity: "Hope for All",
            amount: 50,
            method: "Debit",
            status: "Completed",
        },
        {
            id: 2,
            date: "2025-04-08",
            charity: "Green Earth",
            amount: 0.01,
            method: "Crypto (ETH)",
            status: "Pending",
        },
        {
            id: 3,
            date: "2025-04-01",
            charity: "Education First",
            amount: 30,
            method: "Debit",
            status: "Completed",
        },
        {
            id: 4,
            date: "2025-03-28",
            charity: "Water for All",
            amount: 0.012,
            method: "Crypto (ETH)",
            status: "Completed",
        },
    ];

    return (
        <div className="walletMain container mt-5">
            <h2 className="text-center mb-4">My Wallet</h2>

            {/* Solde */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card p-3 shadow-sm">
                        <div className="d-flex align-items-center">
                            <i className="bi bi-credit-card-2-front fs-1 me-3 text-success"></i>
                            <div>
                                <h5>Debit Balance</h5>
                                <p className="fs-4 mb-0">${balances.debit.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3 shadow-sm">
                        <div className="d-flex align-items-center">
                            <i className="bi bi-currency-bitcoin fs-1 me-3 text-primary"></i>
                            <div>
                                <h5>Crypto Balance</h5>
                                <p className="fs-4 mb-0">{balances.crypto} ETH</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Infos utilisateur */}
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h5 className="card-title"><i className="bi bi-person-circle me-2"></i>User Information</h5>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Member Since:</strong> {user.memberSince}</p>
                </div>
            </div>

            {/* Filtres */}
            <div className="card mb-3 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title mb-3"><i className="bi bi-funnel-fill me-2"></i>Filters</h5>
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <label className="form-label">Payment Method</label>
                            <select className="form-select" disabled>
                                <option>All</option>
                                <option>Debit</option>
                                <option>Crypto (ETH)</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-2">
                            <label className="form-label">Status</label>
                            <select className="form-select" disabled>
                                <option>All</option>
                                <option>Completed</option>
                                <option>Pending</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transactions */}
            <div className="card shadow-sm mb-3">
                <div className="card-body">
                    <h5 className="card-title mb-3"><i className="bi bi-clock-history me-2"></i>Transaction History</h5>
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead className="table-light">
                            <tr>
                                <th>Date</th>
                                <th>Charity</th>
                                <th>Amount</th>
                                <th>Method</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {transactions.map((tx) => (
                                <tr key={tx.id}>
                                    <td>{tx.date}</td>
                                    <td>{tx.charity}</td>
                                    <td>
                                        {tx.method.includes('Crypto') ? (
                                            <span className="text-primary">{tx.amount} ETH</span>
                                        ) : (
                                            <span className="text-success">${tx.amount}</span>
                                        )}
                                    </td>
                                    <td>{tx.method}</td>
                                    <td>
                      <span className={`badge ${tx.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'}`}>
                        {tx.status}
                      </span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <nav className="mt-3">
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled">
                                <a className="page-link">Previous</a>
                            </li>
                            <li className="page-item active"><a className="page-link">1</a></li>
                            <li className="page-item"><a className="page-link">2</a></li>
                            <li className="page-item"><a className="page-link">3</a></li>
                            <li className="page-item">
                                <a className="page-link">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
