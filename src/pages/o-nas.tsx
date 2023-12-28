import React from "react";
import Layout from "../components/Layout/Layout";
import Typography from "../typography/Typography/Typography";
import Module from "../components/Module/Module";
import PageContainer from "../components/PageContainer/PageContainer";

const ONas = () => {
  return (
    <Layout>
      <Module>
        <PageContainer>
          <Typography as="h2">About Us</Typography>
          <Typography as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sed nec metus, ut quisque vehicula fames mus. Mauris, tristique id
            orci adipiscing arcu vestibulum, at. Euismod et enim congue cursus
            enim. Sagittis massa aliquet interdum at amet tristique. Amet
            feugiat fames dui tortor, accumsan lectus quam lacus id. Aliquet
            tellus pellentesque convallis massa. Vel volutpat imperdiet tellus
            ut eget sapien. Eget aliquam aliquam et suspendisse. Ut egestas
            ultrices nunc laoreet sed in accumsan, mauris.
          </Typography>
        </PageContainer>
      </Module>
    </Layout>
  );
};

export default ONas;
