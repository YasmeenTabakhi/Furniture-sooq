import {
    Menu,
    Group,
    Text,
    Avatar,
    ActionIcon,
} from '@mantine/core';
import {
    Navigate,
    json,
    Link,
    useNavigate,
} from 'react-router-dom';
import {
    IconLogout,
    IconChevronRight,
} from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

export default function UserMenu() {
    return (
        <Group position="center">
            <Menu
                withArrow
                width={300}
                position="bottom"
                transitionProps={{ transition: 'pop' }}
                withinPortal
            >
                <Menu.Target>
                    <ActionIcon>
                        <IconSettings size="1.5rem" stroke={2} color="#333" />
                    </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>

                    <Link
                        to="profile"
                    >
                        <Menu.Item
                            rightSection={<IconChevronRight size="1.2rem" stroke={1.5} />}
                        >
                            <Group>
                                <Avatar
                                    radius="xl"
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                />

                                <div>
                                    <Text weight={500}>Abd </Text>
                                    <Text size="xs" color="dimmed">
                                        abd@gmail
                                    </Text>
                                    <Text size="xs" color="dimmed">
                                        A
                                    </Text>
                                </div>

                            </Group>
                        </Menu.Item>
                    </Link>

                    <Menu.Divider />

                    <Menu.Label>Settings</Menu.Label>

                    <Menu.Item
                        icon={<IconLogout size="0.9rem" stroke={1.5} />}>
                        Logout
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Group>
    )
} 