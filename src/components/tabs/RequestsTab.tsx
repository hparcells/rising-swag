import { useEffect, useState } from 'react';
import { ActionIcon, Anchor, List, Table } from '@mantine/core';
import { Request } from '@prisma/client';
import { IconTrash } from '@tabler/icons-react';

import { deleteRequest, getRequests } from '@/actions/request';

function RequestsTab() {
  const [requests, setRequests] = useState<Request[]>([]);

  async function fetchRequests() {
    const fetchedRequests = await getRequests();
    setRequests(fetchedRequests);
  }

  useEffect(() => {
    fetchRequests();
  }, []);

  async function handleDelete(requestId: string) {
    setRequests(
      requests.filter((request) => {
        return request.id !== requestId;
      })
    );
    await deleteRequest(requestId);
    fetchRequests();
  }

  return (
    <div
      style={{
        margin: '1em 0.5em'
      }}
    >
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Link</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {requests.map((request) => {
            return (
              <Table.Tr key={request.id}>
                <Table.Td>
                  <Anchor href={request.url} target='_blank'>
                    {request.url}
                  </Anchor>
                </Table.Td>
                <Table.Td>
                  <List>
                    <ActionIcon
                      variant='filled'
                      color='red'
                      onClick={() => {
                        handleDelete(request.id);
                      }}
                    >
                      <IconTrash style={{ width: '70%', height: '70%' }} />
                    </ActionIcon>
                  </List>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default RequestsTab;
