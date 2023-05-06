import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png"}}>
        <div className="redes">
        <a href="https://www.facebook.com/people/Eddy-Calan/pfbid031KVUJJzebzxXeHCwiW7tF2oNQcJvcj24dDKLJQxy1LSgsVjMLSdABdMqfmiCt7kfl/">
            <img src="/img/facebook.png" alt="Facebook"/>
        </a>
        <a href="https://twitter.com/Eddy_Web_Design">
            <img src="/img/twitter.png" alt="twitter"/>
        </a>
        <a href="https://www.instagram.com/eddy_web_designer/">
            <img src="/img/instagram.png" alt="instagram"/>
        </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Eddy Calan</strong>
    </footer>
}

export default Footer