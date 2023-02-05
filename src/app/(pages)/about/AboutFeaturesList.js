import AboutFeaturesItem from "./AboutFeaturesItem";

let featureList = [
    {
        title: "Ultra HD",
        content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        icon: '/images/feature_icon_1.svg'
    },
    {
        title: "Film",
        content: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first.",
        icon: '/images/feature_icon_2.svg'
    },
    {
        title: "Awards",
        content: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.",
        icon: '/images/feature_icon_3.svg'
    },
    {
        title: "Notifications",
        content: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
        icon: '/images/feature_icon_4.svg'
    },
    {
        title: "Rocket",
        content: "It has survived not only five centuries, but also the leap into electronic typesetting.",
        icon: '/images/feature_icon_5.svg'
    },
    {
        title: "Multi Language Subtitles",
        content: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
        icon: '/images/feature_icon_6.svg'
    }

]

export default function AboutFeaturesList() {
    return (
        <div className="about-feature-content-list">
            <div className="row">
                {
                    featureList.map((item, index) => {
                        return (
                            <div key={index} className="col-sm-4">
                                <AboutFeaturesItem title={item.title} content={item.content} icon={item.icon} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}