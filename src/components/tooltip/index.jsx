const Tooltip = ({ message }) => (
    <div className="tooltip">
      {message}
      <style jsx>{`
        .tooltip {
            position: absolute;
            background: #000;
            color: white;
            padding: 1em;
            border-radius: 5px;
            margin-top: 10px;
            z-index: 10;
        }
      `}</style>
    </div>
  );

  export default Tooltip