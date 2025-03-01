/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createSiteSourceCollectionResponseFromDiscriminatorValue, createSiteSourceFromDiscriminatorValue, serializeSiteSource, type SiteSource, type SiteSourceCollectionResponse } from '@microsoft/msgraph-sdk/models/security/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { SiteSourceItemRequestBuilderNavigationMetadata, SiteSourceItemRequestBuilderRequestsMetadata, type SiteSourceItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the siteSources property of the microsoft.graph.security.ediscoveryCustodian entity.
 */
export interface SiteSourcesRequestBuilder extends BaseRequestBuilder<SiteSourcesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the siteSources property of the microsoft.graph.security.ediscoveryCustodian entity.
     * @param siteSourceId The unique identifier of siteSource
     * @returns {SiteSourceItemRequestBuilder}
     */
     bySiteSourceId(siteSourceId: string) : SiteSourceItemRequestBuilder;
    /**
     * Get a list of the siteSource objects associated with an ediscoveryCustodian or ediscoveryHoldPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SiteSourceCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycustodian-list-sitesources?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<SiteSourcesRequestBuilderGetQueryParameters> | undefined) : Promise<SiteSourceCollectionResponse | undefined>;
    /**
     * Create a new siteSource object associated with an eDiscovery custodian.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SiteSource>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycustodian-post-sitesources?view=graph-rest-1.0|Find more info here}
     */
     post(body: SiteSource, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SiteSource | undefined>;
    /**
     * Get a list of the siteSource objects associated with an ediscoveryCustodian or ediscoveryHoldPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SiteSourcesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new siteSource object associated with an eDiscovery custodian.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SiteSource, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the siteSource objects associated with an ediscoveryCustodian or ediscoveryHoldPolicy.
 */
export interface SiteSourcesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const SiteSourcesRequestBuilderUriTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/custodians/{ediscoveryCustodian%2Did}/siteSources{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SiteSourcesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SiteSourcesRequestBuilderNavigationMetadata: Record<Exclude<keyof SiteSourcesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    bySiteSourceId: {
        requestsMetadata: SiteSourceItemRequestBuilderRequestsMetadata,
        navigationMetadata: SiteSourceItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["siteSource%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SiteSourcesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: SiteSourcesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSiteSourceCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: SiteSourcesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: SiteSourcesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSiteSourceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSiteSource,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
