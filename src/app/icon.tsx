import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
    width: 32,
    height:32
};
export const contentType = "image/png";

export default function icon() {
    return new ImageResponse((
        <div style={{
            fontSize: 24,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'#022023',
            color: 'white',
            fontFamily: 'serif',
            borderRadius: '10px'
        }}>
            S
        </div>
    ), {...size})
}

