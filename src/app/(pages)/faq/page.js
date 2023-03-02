import FAQContentList from "./FAQContentList";

export default function FAQ() {
    return (
        <section class="content">
            <div class="container">
                <div class="content__container">
                    <div className="page-title">
                        <h1>FAQ</h1>
                        <div className="page_title_bar"></div>
                    </div>
                    <div className="page-content">
                        <FAQContentList />
                    </div>
                </div>
            </div>
        </section>
    );
}