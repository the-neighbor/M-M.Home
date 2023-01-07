export default function DonatePage () {
    return (
        <>
        <div className="p-5">
            <div className="container mx-auto w-80 p-5 absolute-center bg-white rounded">
                <h1 className="text-black text-center text-2xl mb-5 plex-mono italic">Donate</h1>
                <script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe allowpaymentrequest="" frameborder="0" height="900px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/m-m_institute?show_content=true" style={{maxWidth: "100%", minWidth: "100%", maxHeight:"none!important"}} width="100%"></iframe>
            </div>
        </div>
        </>
    );
}