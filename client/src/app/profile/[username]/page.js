"use client"
import { useRouter } from "next/navigation";
import withAuth from '../../withAuth';
import { useAxios } from "@/app/contexts/axios";
import { useEffect, useState } from "react";
import { Table, Flex, Typography } from 'antd';
import { useSelector } from "react-redux";
import { userSelector } from "@/app/redux/sessionReducer";

const columns = [
    {
        title: 'Score Limit',
        dataIndex: 'scoreLimit',
        key: 'scoreLimit',
        width: 100,
    },
    {
        title: 'Is Winner',
        dataIndex: 'isWinner',
        key: 'isWinner',
        width: 100,
        render: (isWinner) => (isWinner ? 'Yes' : 'No'),
    },
    {
        title: 'Left Player',
        children: [
            {
                title: 'Username',
                dataIndex: ['leftPlayer', 'username'],
                key: 'leftPlayerUsername',
            },
            {
                title: 'Display Name',
                dataIndex: ['leftPlayer', 'displayname'],
                key: 'leftPlayerDisplayname',
            },
        ],
    },
    {
        title: 'Left Player Score',
        children: [
            {
                title: 'Level',
                dataIndex: ['leftPlayerScore', 'level'],
                key: 'leftPlayerLevel',
            },
            {
                title: 'Points',
                dataIndex: ['leftPlayerScore', 'points'],
                key: 'leftPlayerPoints',
            },
            {
                title: 'Line Clears',
                dataIndex: ['leftPlayerScore', 'lineClears'],
                key: 'leftPlayerLineClears',
            },
        ],
    },
    {
        title: 'Right Player',
        children: [
            {
                title: 'Username',
                dataIndex: ['rightPlayer', 'username'],
                key: 'rightPlayerUsername',
            },
            {
                title: 'Display Name',
                dataIndex: ['rightPlayer', 'displayname'],
                key: 'rightPlayerDisplayname',
            },
        ],
    },
    {
        title: 'Right Player Score',
        children: [
            {
                title: 'Level',
                dataIndex: ['rightPlayerScore', 'level'],
                key: 'rightPlayerLevel',
            },
            {
                title: 'Points',
                dataIndex: ['rightPlayerScore', 'points'],
                key: 'rightPlayerPoints',
            },
            {
                title: 'Line Clears',
                dataIndex: ['rightPlayerScore', 'lineClears'],
                key: 'rightPlayerLineClears',
            },
        ],
    },
];

function Profile({ params }) {
    const { axiosReady, axiosInstance } = useAxios();
    const [profile, setProfile] = useState(null);
    const [games, setGames] = useState([]);
    const user = useSelector(userSelector);
    const router = useRouter();

    async function fetchUserProfile(username) {
        return axiosInstance.get(`/userProfile/${username}`);
    }

    useEffect(() => {
        if (!axiosReady)
            return;
        (async () => {
            const response = await fetchUserProfile(params.username).catch(e => {

                router.push("/404", undefined, { shallow: true });
            });
            if (!response)
                return;
            setProfile(response.data.profile);
            setGames(response.data.Games);
            console.log("!response", response);
        })();
        console.log("params are", params);
    }, [params, axiosReady]);
    return <Flex vertical>
        <Flex justify="center">
            {profile && <Typography><h1>{profile.id == user.id ? 'Your profile' : `Profile of ${profile.username}`}</h1></Typography>}
        </Flex>
        <Table
            columns={columns}
            dataSource={games}
            bordered
            size="middle"
            scroll={{ x: 'calc(700px + 50%)', y: 240 }}
        />
    </Flex>
}

export default withAuth(Profile);