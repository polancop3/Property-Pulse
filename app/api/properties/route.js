import connectDB from "@/config/database";

export const GET = async (request) => {
    try {
        await connectDB();
        return new Response(JSON.stringify({message:'hellow world'}), { status: 200 })
    } catch (error) {
        console.log(error);
        new Response('something went wrong', { status: 500 })
    }
};