import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Serves as container of the components of a CLLayout.
 * @param {string} [addClasses] Adds optional classes.
 * @param {string} [id]
 */

export class CLStackGrid extends React.Component {
  render() {
    const {
      classes,
      addClasses,
      id,
      children,
      stackHeight = 400,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-stack-grid`;
    const className = classNames(
      'mdl-grid',
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id
    };

    const childrenCount = React.Children.count(children);

    const [ main, section1, section2, section3, section4, section5, section6 ] =
      children && childrenCount > 1 ? children : [ children ];

    const columnAttributes = {
      className: classNames(
        'mdl-cell',
        {
          'mdl-cell--12-col': childrenCount < 3,
          'mdl-cell--6-col': childrenCount >= 3 && childrenCount < 5,
          'mdl-cell--4-col': childrenCount >= 5,
        }
      )
    };

    const bigStackAttributes = {
      className: classNames(
        'mdl-cell mdl-cell--12-col'
      ),
      style: {
        height: stackHeight,
        maxHeight: stackHeight,
        overflow: 'hidden'
      }
    };

    const smallStackAttributes = {
      className: classNames(
        'mdl-cell mdl-cell--12-col'
      ),
      style: {
        height: stackHeight / 2,
        maxHeight: stackHeight / 2,
        overflow: 'hidden'
      }
    };
    return (
      <div {...attributes} >
        <div {...columnAttributes} >
          <div className="mdl-grid">
            <div {...bigStackAttributes} >
              {
                typeof main === 'string' ? main :
                  React.cloneElement(main, {
                    classes,
                    snackbar
                  })
              }
            </div>
            {
              section1 && (childrenCount < 3 || childrenCount > 3) ? (
                <div {...smallStackAttributes} >
                  {
                    typeof section1 === 'string' ? section1 :
                      React.cloneElement(section1, {
                        classes,
                        snackbar
                      })
                  }
                </div>
              ) : null
            }
          </div>
        </div>
        {
          childrenCount >= 3 ? (
            <div {...columnAttributes} >
              <div className="mdl-grid">
                {
                  section1 && (childrenCount === 3) ? (
                    <div {...smallStackAttributes} >
                      {
                        typeof section1 === 'string' ? section1 :
                          React.cloneElement(section1, {
                            classes,
                            snackbar
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section2 && (childrenCount > 3) ? (
                    <div {...smallStackAttributes} >
                      {
                        typeof section2 === 'string' ? section2 :
                          React.cloneElement(section2, {
                            classes,
                            snackbar
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section3 && (childrenCount === 4) ? (
                    <div {...bigStackAttributes} >
                      {
                        typeof section3 === 'string' ? section3 :
                          React.cloneElement(section3, {
                            classes,
                            snackbar
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section3 && (childrenCount > 4) ? (
                    <div {...smallStackAttributes} >
                      {
                        typeof section3 === 'string' ? section3 :
                          React.cloneElement(section3, {
                            classes,
                            snackbar
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section4 && (childrenCount > 4) ? (
                    <div {...smallStackAttributes} >
                      {
                        typeof section3 === 'string' ? section4 :
                          React.cloneElement(section4, {
                            classes,
                            snackbar
                          })
                      }
                    </div>
                  ) : null
                }
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}
