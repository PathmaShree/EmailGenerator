function EmailOutput({ email }) {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
  };

  return (

    <div className="output-container">

      <div className="output-header">

        <h2>
          Generated Email
        </h2>

        <button
          className="copy-btn"
          onClick={copyToClipboard}
        >
          Copy
        </button>

      </div>

      <div className="email-text">
        {email}
      </div>

    </div>
  );
}

export default EmailOutput;