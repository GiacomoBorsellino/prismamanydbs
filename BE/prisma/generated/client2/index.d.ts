
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model itemsParalleli
 * 
 */
export type itemsParalleli = {
  name: string | null
  value: number | null
  id: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ItemsParallelis
 * const itemsParallelis = await prisma.itemsParalleli.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ItemsParallelis
   * const itemsParallelis = await prisma.itemsParalleli.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.itemsParalleli`: Exposes CRUD operations for the **itemsParalleli** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemsParallelis
    * const itemsParallelis = await prisma.itemsParalleli.findMany()
    * ```
    */
  get itemsParalleli(): Prisma.itemsParalleliDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.4.0
   * Query Engine version: f352a33b70356f46311da8b00d83386dd9f145d6
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    itemsParalleli: 'itemsParalleli'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model itemsParalleli
   */


  export type AggregateItemsParalleli = {
    _count: ItemsParalleliCountAggregateOutputType | null
    _avg: ItemsParalleliAvgAggregateOutputType | null
    _sum: ItemsParalleliSumAggregateOutputType | null
    _min: ItemsParalleliMinAggregateOutputType | null
    _max: ItemsParalleliMaxAggregateOutputType | null
  }

  export type ItemsParalleliAvgAggregateOutputType = {
    value: number | null
    id: number | null
  }

  export type ItemsParalleliSumAggregateOutputType = {
    value: number | null
    id: number | null
  }

  export type ItemsParalleliMinAggregateOutputType = {
    name: string | null
    value: number | null
    id: number | null
  }

  export type ItemsParalleliMaxAggregateOutputType = {
    name: string | null
    value: number | null
    id: number | null
  }

  export type ItemsParalleliCountAggregateOutputType = {
    name: number
    value: number
    id: number
    _all: number
  }


  export type ItemsParalleliAvgAggregateInputType = {
    value?: true
    id?: true
  }

  export type ItemsParalleliSumAggregateInputType = {
    value?: true
    id?: true
  }

  export type ItemsParalleliMinAggregateInputType = {
    name?: true
    value?: true
    id?: true
  }

  export type ItemsParalleliMaxAggregateInputType = {
    name?: true
    value?: true
    id?: true
  }

  export type ItemsParalleliCountAggregateInputType = {
    name?: true
    value?: true
    id?: true
    _all?: true
  }

  export type ItemsParalleliAggregateArgs = {
    /**
     * Filter which itemsParalleli to aggregate.
     * 
    **/
    where?: itemsParalleliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemsParallelis to fetch.
     * 
    **/
    orderBy?: Enumerable<itemsParalleliOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: itemsParalleliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemsParallelis from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemsParallelis.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned itemsParallelis
    **/
    _count?: true | ItemsParalleliCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsParalleliAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsParalleliSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsParalleliMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsParalleliMaxAggregateInputType
  }

  export type GetItemsParalleliAggregateType<T extends ItemsParalleliAggregateArgs> = {
        [P in keyof T & keyof AggregateItemsParalleli]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemsParalleli[P]>
      : GetScalarType<T[P], AggregateItemsParalleli[P]>
  }




  export type ItemsParalleliGroupByArgs = {
    where?: itemsParalleliWhereInput
    orderBy?: Enumerable<itemsParalleliOrderByWithAggregationInput>
    by: Array<ItemsParalleliScalarFieldEnum>
    having?: itemsParalleliScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsParalleliCountAggregateInputType | true
    _avg?: ItemsParalleliAvgAggregateInputType
    _sum?: ItemsParalleliSumAggregateInputType
    _min?: ItemsParalleliMinAggregateInputType
    _max?: ItemsParalleliMaxAggregateInputType
  }


  export type ItemsParalleliGroupByOutputType = {
    name: string | null
    value: number | null
    id: number
    _count: ItemsParalleliCountAggregateOutputType | null
    _avg: ItemsParalleliAvgAggregateOutputType | null
    _sum: ItemsParalleliSumAggregateOutputType | null
    _min: ItemsParalleliMinAggregateOutputType | null
    _max: ItemsParalleliMaxAggregateOutputType | null
  }

  type GetItemsParalleliGroupByPayload<T extends ItemsParalleliGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ItemsParalleliGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsParalleliGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsParalleliGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsParalleliGroupByOutputType[P]>
        }
      >
    >


  export type itemsParalleliSelect = {
    name?: boolean
    value?: boolean
    id?: boolean
  }

  export type itemsParalleliGetPayload<
    S extends boolean | null | undefined | itemsParalleliArgs,
    U = keyof S
      > = S extends true
        ? itemsParalleli
    : S extends undefined
    ? never
    : S extends itemsParalleliArgs | itemsParalleliFindManyArgs
    ?'include' extends U
    ? itemsParalleli 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof itemsParalleli ? itemsParalleli[P] : never
  } 
    : itemsParalleli
  : itemsParalleli


  type itemsParalleliCountArgs = Merge<
    Omit<itemsParalleliFindManyArgs, 'select' | 'include'> & {
      select?: ItemsParalleliCountAggregateInputType | true
    }
  >

  export interface itemsParalleliDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ItemsParalleli that matches the filter.
     * @param {itemsParalleliFindUniqueArgs} args - Arguments to find a ItemsParalleli
     * @example
     * // Get one ItemsParalleli
     * const itemsParalleli = await prisma.itemsParalleli.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends itemsParalleliFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, itemsParalleliFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'itemsParalleli'> extends True ? CheckSelect<T, Prisma__itemsParalleliClient<itemsParalleli>, Prisma__itemsParalleliClient<itemsParalleliGetPayload<T>>> : CheckSelect<T, Prisma__itemsParalleliClient<itemsParalleli | null, null>, Prisma__itemsParalleliClient<itemsParalleliGetPayload<T> | null, null>>

    /**
     * Find the first ItemsParalleli that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsParalleliFindFirstArgs} args - Arguments to find a ItemsParalleli
     * @example
     * // Get one ItemsParalleli
     * const itemsParalleli = await prisma.itemsParalleli.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends itemsParalleliFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, itemsParalleliFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'itemsParalleli'> extends True ? CheckSelect<T, Prisma__itemsParalleliClient<itemsParalleli>, Prisma__itemsParalleliClient<itemsParalleliGetPayload<T>>> : CheckSelect<T, Prisma__itemsParalleliClient<itemsParalleli | null, null>, Prisma__itemsParalleliClient<itemsParalleliGetPayload<T> | null, null>>

    /**
     * Find zero or more ItemsParallelis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsParalleliFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemsParallelis
     * const itemsParallelis = await prisma.itemsParalleli.findMany()
     * 
     * // Get first 10 ItemsParallelis
     * const itemsParallelis = await prisma.itemsParalleli.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const itemsParalleliWithNameOnly = await prisma.itemsParalleli.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends itemsParalleliFindManyArgs>(
      args?: SelectSubset<T, itemsParalleliFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<itemsParalleli>>, PrismaPromise<Array<itemsParalleliGetPayload<T>>>>

    /**
     * Create a ItemsParalleli.
     * @param {itemsParalleliCreateArgs} args - Arguments to create a ItemsParalleli.
     * @example
     * // Create one ItemsParalleli
     * const ItemsParalleli = await prisma.itemsParalleli.create({
     *   data: {
     *     // ... data to create a ItemsParalleli
     *   }
     * })
     * 
    **/
    create<T extends itemsParalleliCreateArgs>(
      args: SelectSubset<T, itemsParalleliCreateArgs>
    ): CheckSelect<T, Prisma__itemsParalleliClient<itemsParalleli>, Prisma__itemsParalleliClient<itemsParalleliGetPayload<T>>>

    /**
     * Create many ItemsParallelis.
     *     @param {itemsParalleliCreateManyArgs} args - Arguments to create many ItemsParallelis.
     *     @example
     *     // Create many ItemsParallelis
     *     const itemsParalleli = await prisma.itemsParalleli.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends itemsParalleliCreateManyArgs>(
      args?: SelectSubset<T, itemsParalleliCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ItemsParalleli.
     * @param {itemsParalleliDeleteArgs} args - Arguments to delete one ItemsParalleli.
     * @example
     * // Delete one ItemsParalleli
     * const ItemsParalleli = await prisma.itemsParalleli.delete({
     *   where: {
     *     // ... filter to delete one ItemsParalleli
     *   }
     * })
     * 
    **/
    delete<T extends itemsParalleliDeleteArgs>(
      args: SelectSubset<T, itemsParalleliDeleteArgs>
    ): CheckSelect<T, Prisma__itemsParalleliClient<itemsParalleli>, Prisma__itemsParalleliClient<itemsParalleliGetPayload<T>>>

    /**
     * Update one ItemsParalleli.
     * @param {itemsParalleliUpdateArgs} args - Arguments to update one ItemsParalleli.
     * @example
     * // Update one ItemsParalleli
     * const itemsParalleli = await prisma.itemsParalleli.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends itemsParalleliUpdateArgs>(
      args: SelectSubset<T, itemsParalleliUpdateArgs>
    ): CheckSelect<T, Prisma__itemsParalleliClient<itemsParalleli>, Prisma__itemsParalleliClient<itemsParalleliGetPayload<T>>>

    /**
     * Delete zero or more ItemsParallelis.
     * @param {itemsParalleliDeleteManyArgs} args - Arguments to filter ItemsParallelis to delete.
     * @example
     * // Delete a few ItemsParallelis
     * const { count } = await prisma.itemsParalleli.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends itemsParalleliDeleteManyArgs>(
      args?: SelectSubset<T, itemsParalleliDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemsParallelis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsParalleliUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemsParallelis
     * const itemsParalleli = await prisma.itemsParalleli.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends itemsParalleliUpdateManyArgs>(
      args: SelectSubset<T, itemsParalleliUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemsParalleli.
     * @param {itemsParalleliUpsertArgs} args - Arguments to update or create a ItemsParalleli.
     * @example
     * // Update or create a ItemsParalleli
     * const itemsParalleli = await prisma.itemsParalleli.upsert({
     *   create: {
     *     // ... data to create a ItemsParalleli
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemsParalleli we want to update
     *   }
     * })
    **/
    upsert<T extends itemsParalleliUpsertArgs>(
      args: SelectSubset<T, itemsParalleliUpsertArgs>
    ): CheckSelect<T, Prisma__itemsParalleliClient<itemsParalleli>, Prisma__itemsParalleliClient<itemsParalleliGetPayload<T>>>

    /**
     * Find one ItemsParalleli that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {itemsParalleliFindUniqueOrThrowArgs} args - Arguments to find a ItemsParalleli
     * @example
     * // Get one ItemsParalleli
     * const itemsParalleli = await prisma.itemsParalleli.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends itemsParalleliFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, itemsParalleliFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__itemsParalleliClient<itemsParalleli>, Prisma__itemsParalleliClient<itemsParalleliGetPayload<T>>>

    /**
     * Find the first ItemsParalleli that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsParalleliFindFirstOrThrowArgs} args - Arguments to find a ItemsParalleli
     * @example
     * // Get one ItemsParalleli
     * const itemsParalleli = await prisma.itemsParalleli.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends itemsParalleliFindFirstOrThrowArgs>(
      args?: SelectSubset<T, itemsParalleliFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__itemsParalleliClient<itemsParalleli>, Prisma__itemsParalleliClient<itemsParalleliGetPayload<T>>>

    /**
     * Count the number of ItemsParallelis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsParalleliCountArgs} args - Arguments to filter ItemsParallelis to count.
     * @example
     * // Count the number of ItemsParallelis
     * const count = await prisma.itemsParalleli.count({
     *   where: {
     *     // ... the filter for the ItemsParallelis we want to count
     *   }
     * })
    **/
    count<T extends itemsParalleliCountArgs>(
      args?: Subset<T, itemsParalleliCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsParalleliCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemsParalleli.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsParalleliAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsParalleliAggregateArgs>(args: Subset<T, ItemsParalleliAggregateArgs>): PrismaPromise<GetItemsParalleliAggregateType<T>>

    /**
     * Group by ItemsParalleli.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsParalleliGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemsParalleliGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsParalleliGroupByArgs['orderBy'] }
        : { orderBy?: ItemsParalleliGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemsParalleliGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsParalleliGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for itemsParalleli.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__itemsParalleliClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * itemsParalleli base type for findUnique actions
   */
  export type itemsParalleliFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the itemsParalleli
     * 
    **/
    select?: itemsParalleliSelect | null
    /**
     * Filter, which itemsParalleli to fetch.
     * 
    **/
    where: itemsParalleliWhereUniqueInput
  }

  /**
   * itemsParalleli: findUnique
   */
  export interface itemsParalleliFindUniqueArgs extends itemsParalleliFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * itemsParalleli base type for findFirst actions
   */
  export type itemsParalleliFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the itemsParalleli
     * 
    **/
    select?: itemsParalleliSelect | null
    /**
     * Filter, which itemsParalleli to fetch.
     * 
    **/
    where?: itemsParalleliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemsParallelis to fetch.
     * 
    **/
    orderBy?: Enumerable<itemsParalleliOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itemsParallelis.
     * 
    **/
    cursor?: itemsParalleliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemsParallelis from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemsParallelis.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itemsParallelis.
     * 
    **/
    distinct?: Enumerable<ItemsParalleliScalarFieldEnum>
  }

  /**
   * itemsParalleli: findFirst
   */
  export interface itemsParalleliFindFirstArgs extends itemsParalleliFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * itemsParalleli findMany
   */
  export type itemsParalleliFindManyArgs = {
    /**
     * Select specific fields to fetch from the itemsParalleli
     * 
    **/
    select?: itemsParalleliSelect | null
    /**
     * Filter, which itemsParallelis to fetch.
     * 
    **/
    where?: itemsParalleliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemsParallelis to fetch.
     * 
    **/
    orderBy?: Enumerable<itemsParalleliOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing itemsParallelis.
     * 
    **/
    cursor?: itemsParalleliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemsParallelis from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemsParallelis.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ItemsParalleliScalarFieldEnum>
  }


  /**
   * itemsParalleli create
   */
  export type itemsParalleliCreateArgs = {
    /**
     * Select specific fields to fetch from the itemsParalleli
     * 
    **/
    select?: itemsParalleliSelect | null
    /**
     * The data needed to create a itemsParalleli.
     * 
    **/
    data: XOR<itemsParalleliCreateInput, itemsParalleliUncheckedCreateInput>
  }


  /**
   * itemsParalleli createMany
   */
  export type itemsParalleliCreateManyArgs = {
    /**
     * The data used to create many itemsParallelis.
     * 
    **/
    data: Enumerable<itemsParalleliCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * itemsParalleli update
   */
  export type itemsParalleliUpdateArgs = {
    /**
     * Select specific fields to fetch from the itemsParalleli
     * 
    **/
    select?: itemsParalleliSelect | null
    /**
     * The data needed to update a itemsParalleli.
     * 
    **/
    data: XOR<itemsParalleliUpdateInput, itemsParalleliUncheckedUpdateInput>
    /**
     * Choose, which itemsParalleli to update.
     * 
    **/
    where: itemsParalleliWhereUniqueInput
  }


  /**
   * itemsParalleli updateMany
   */
  export type itemsParalleliUpdateManyArgs = {
    /**
     * The data used to update itemsParallelis.
     * 
    **/
    data: XOR<itemsParalleliUpdateManyMutationInput, itemsParalleliUncheckedUpdateManyInput>
    /**
     * Filter which itemsParallelis to update
     * 
    **/
    where?: itemsParalleliWhereInput
  }


  /**
   * itemsParalleli upsert
   */
  export type itemsParalleliUpsertArgs = {
    /**
     * Select specific fields to fetch from the itemsParalleli
     * 
    **/
    select?: itemsParalleliSelect | null
    /**
     * The filter to search for the itemsParalleli to update in case it exists.
     * 
    **/
    where: itemsParalleliWhereUniqueInput
    /**
     * In case the itemsParalleli found by the `where` argument doesn't exist, create a new itemsParalleli with this data.
     * 
    **/
    create: XOR<itemsParalleliCreateInput, itemsParalleliUncheckedCreateInput>
    /**
     * In case the itemsParalleli was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<itemsParalleliUpdateInput, itemsParalleliUncheckedUpdateInput>
  }


  /**
   * itemsParalleli delete
   */
  export type itemsParalleliDeleteArgs = {
    /**
     * Select specific fields to fetch from the itemsParalleli
     * 
    **/
    select?: itemsParalleliSelect | null
    /**
     * Filter which itemsParalleli to delete.
     * 
    **/
    where: itemsParalleliWhereUniqueInput
  }


  /**
   * itemsParalleli deleteMany
   */
  export type itemsParalleliDeleteManyArgs = {
    /**
     * Filter which itemsParallelis to delete
     * 
    **/
    where?: itemsParalleliWhereInput
  }


  /**
   * itemsParalleli: findUniqueOrThrow
   */
  export type itemsParalleliFindUniqueOrThrowArgs = itemsParalleliFindUniqueArgsBase
      

  /**
   * itemsParalleli: findFirstOrThrow
   */
  export type itemsParalleliFindFirstOrThrowArgs = itemsParalleliFindFirstArgsBase
      

  /**
   * itemsParalleli without action
   */
  export type itemsParalleliArgs = {
    /**
     * Select specific fields to fetch from the itemsParalleli
     * 
    **/
    select?: itemsParalleliSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ItemsParalleliScalarFieldEnum: {
    name: 'name',
    value: 'value',
    id: 'id'
  };

  export type ItemsParalleliScalarFieldEnum = (typeof ItemsParalleliScalarFieldEnum)[keyof typeof ItemsParalleliScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type itemsParalleliWhereInput = {
    AND?: Enumerable<itemsParalleliWhereInput>
    OR?: Enumerable<itemsParalleliWhereInput>
    NOT?: Enumerable<itemsParalleliWhereInput>
    name?: StringNullableFilter | string | null
    value?: IntNullableFilter | number | null
    id?: IntFilter | number
  }

  export type itemsParalleliOrderByWithRelationInput = {
    name?: SortOrder
    value?: SortOrder
    id?: SortOrder
  }

  export type itemsParalleliWhereUniqueInput = {
    id?: number
  }

  export type itemsParalleliOrderByWithAggregationInput = {
    name?: SortOrder
    value?: SortOrder
    id?: SortOrder
    _count?: itemsParalleliCountOrderByAggregateInput
    _avg?: itemsParalleliAvgOrderByAggregateInput
    _max?: itemsParalleliMaxOrderByAggregateInput
    _min?: itemsParalleliMinOrderByAggregateInput
    _sum?: itemsParalleliSumOrderByAggregateInput
  }

  export type itemsParalleliScalarWhereWithAggregatesInput = {
    AND?: Enumerable<itemsParalleliScalarWhereWithAggregatesInput>
    OR?: Enumerable<itemsParalleliScalarWhereWithAggregatesInput>
    NOT?: Enumerable<itemsParalleliScalarWhereWithAggregatesInput>
    name?: StringNullableWithAggregatesFilter | string | null
    value?: IntNullableWithAggregatesFilter | number | null
    id?: IntWithAggregatesFilter | number
  }

  export type itemsParalleliCreateInput = {
    name?: string | null
    value?: number | null
    id: number
  }

  export type itemsParalleliUncheckedCreateInput = {
    name?: string | null
    value?: number | null
    id: number
  }

  export type itemsParalleliUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type itemsParalleliUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type itemsParalleliCreateManyInput = {
    name?: string | null
    value?: number | null
    id: number
  }

  export type itemsParalleliUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type itemsParalleliUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type itemsParalleliCountOrderByAggregateInput = {
    name?: SortOrder
    value?: SortOrder
    id?: SortOrder
  }

  export type itemsParalleliAvgOrderByAggregateInput = {
    value?: SortOrder
    id?: SortOrder
  }

  export type itemsParalleliMaxOrderByAggregateInput = {
    name?: SortOrder
    value?: SortOrder
    id?: SortOrder
  }

  export type itemsParalleliMinOrderByAggregateInput = {
    name?: SortOrder
    value?: SortOrder
    id?: SortOrder
  }

  export type itemsParalleliSumOrderByAggregateInput = {
    value?: SortOrder
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}