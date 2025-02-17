import { useEffect, useState } from 'react';
import { ActionIcon, Anchor, Image, Table, Text } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';

import { deleteReport, getReports } from '@/actions/report';

import { FullReport } from '@/types/report';

function ReportsTab() {
  const [reports, setReports] = useState<FullReport[]>(null as any);

  async function fetchReports() {
    const reports = await getReports();
    setReports(reports);
  }

  useEffect(() => {
    fetchReports();
  }, []);

  async function handleDelete(reportId: string) {
    setReports(
      reports.filter((report) => {
        return report.id !== reportId;
      })
    );
    await deleteReport(reportId);
    await fetchReports();
  }

  return (
    <div
      style={{
        margin: '1em 0.5em'
      }}
    >
      {reports ? (
        reports.length > 0 ? (
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={20}></Table.Th>
                <Table.Th>Item</Table.Th>
                <Table.Th>Shop</Table.Th>
                <Table.Th>Report Type</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {reports.map((report) => {
                return (
                  <Table.Tr key={report.id}>
                    <Table.Td>
                      <Image w={30} h={30} src={report.item.image} alt={report.item.name} />
                    </Table.Td>
                    <Table.Td>
                      <Anchor href={report.item.link} target='_blank'>
                        {report.item.name}
                      </Anchor>
                    </Table.Td>
                    <Table.Td>
                      <Anchor href={report.item.shop.url} target='_blank'>
                        {report.item.shop.name}
                      </Anchor>
                    </Table.Td>
                    <Table.Td>{report.type}</Table.Td>
                    <Table.Td>
                      <div
                        style={{
                          display: 'flex',
                          gap: '2px'
                        }}
                      >
                        <ActionIcon variant='filled'>
                          <IconPencil style={{ width: '70%', height: '70%' }} />
                        </ActionIcon>
                        <ActionIcon
                          variant='filled'
                          color='red'
                          onClick={() => {
                            handleDelete(report.id);
                          }}
                        >
                          <IconTrash style={{ width: '70%', height: '70%' }} />
                        </ActionIcon>
                      </div>
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        ) : (
          <Text>No reports.</Text>
        )
      ) : (
        <Text>Loading...</Text>
      )}
    </div>
  );
}

export default ReportsTab;
