import React from "react";

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Layout = ({ children, title, description }: Props) => {
  return (
    <div>
      <div className="flex w-full py-7">
        {/* <Sidebar to={undefined} children={undefined} /> */}
        <div className="w-full px-5">
          <div>
            <div className="h-full w-full">
              {/* <Headers
                title={title || "no title"}
                description={description || "no description"}
              /> */}
              {/* <PageContexttProvider> */}
                <div className="py-10 lg:px-7 layout">{children}</div>
              {/* </PageContexttProvider> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
