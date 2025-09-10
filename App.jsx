import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Counter from "./components/Counter";
import LikeToggle from "./components/LikeToggle";
import Footer from "./components/Footer";
export default function App() {
    return (
        <div className="container">
            <Header />
            <ProfileCard
            name="강민경"
            major="인공지능"
            interests={['Music', 'Writing']}
            />
            <Counter />
            <LikeToggle />
            <Footer />
        </div>
    );
}
