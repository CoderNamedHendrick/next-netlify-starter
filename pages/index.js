import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
    <script src="//code.tidio.co/sddr9cnjk4ydmxtmzheha5kmaj7xhf2h.js" async></script>
      </Head>
    <script>
    (function() {
  function onTidioChatApiReady() {
    // Code after chat loaded
    if (window.tidioChatApi) {
    window.tidioChatApi.on("ready", onTidioChatApiReady);
  } else {
    document.addEventListener("tidioChat-ready", onTidioChatApiReady);
  }We 
  }
})();
  
  function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('#tidio-chat-iframe').then((elm) => {
    elm.contentWindow.document.getElementById("button-body").click();
});
    </script>
    </div>
  )
}
