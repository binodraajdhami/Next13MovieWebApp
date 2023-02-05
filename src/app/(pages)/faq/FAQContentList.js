import FAQContentItem from "./FAQContentItem"

export default function FAQContentList() {
    let faqList = [
        {
            title: "Why is a Video is not loading?",
            content: [
                "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
                "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            ]
        },
        {
            title: "Why isn't the video starting at the beginning?",
            content: [
                "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            ]
        },
        {
            title: "Why isn't there a HD version of this video?",
            content: [
                "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
            ]
        },
        {
            title: "How do I make the Video go Fullscreen?",
            content: [
                "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
            ]
        },
        {
            title: "Why is the sound distorted?",
            content: [
                "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            ]
        },
        {
            title: "What Browsers are supported?",
            content: [
                "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ]
        },
        {
            title: "Why is the Video stuttering, buffering or randomly stopping?",
            content: [
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            ]
        },
        {
            title: "How do you handle my privacy?",
            content: [
                "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            ]
        },
        {
            title: "When I change the quality of a video, nothing happens.",
            content: [
                "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
            ]
        },
        {
            title: "How can I contact you?",
            content: [
                "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            ]
        }
    ]

    return (
        <div className="faq-page-content-list">
            <div className="row">
                {
                    faqList.map((item, index) => {
                        return (
                            <div key={index} className="col-sm-6">
                                <FAQContentItem title={item.title} content={item.content} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}