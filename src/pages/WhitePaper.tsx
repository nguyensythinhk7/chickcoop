import { useEffect } from "react";

const WhitePaper = () => {

  useEffect(() => {
    document.title = 'white paper';
  }, []);

  return <div className="coming-soon">Coming soon</div>
}

export default WhitePaper;