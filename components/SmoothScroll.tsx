import ReactLenis from '@studio-freight/react-lenis';

interface SmoothScrollProps {
    children: React.ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Lenis = ReactLenis as any;

    return (
        <Lenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </Lenis>
    );
}

export default SmoothScroll;
