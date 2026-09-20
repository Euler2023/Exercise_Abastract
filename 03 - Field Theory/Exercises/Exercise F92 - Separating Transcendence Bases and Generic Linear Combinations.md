---
title: "Exercise F92: Separating Transcendence Bases and Generic Linear Combinations"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - transcendence-basis
  - separating-transcendence-basis
  - derivations-and-differentials
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VIII, printed p. 375, PDF p. 390, Exercise 6"
created: 2026-09-15
---

# Exercise F92: Separating Transcendence Bases and Generic Linear Combinations

## Problem Statement

> [!question]
> Let $k(x) = k(x_1, \ldots, x_n)$ be a separable extension of transcendence degree $r \ge 1$.
> Let $u_{ij}$ ($i = 1, \ldots, r$; $j = 1, \ldots, n$) be algebraically independent over $k(x)$. Let
> $$
> y_i = \sum_{j=1}^n u_{ij} x_j.
> $$
> Let $k_u = k(u_{ij})_{\text{all } i, j}$.
> 
> (a) Show that $k_u(x)$ is separable algebraic over $k(y_1, \ldots, y_r)$.
> 
> (b) Show that there exists a polynomial $P(u) \in k[u]$ having the following property. Let $(c) = (c_{ij})$ be elements of $k$ such that $P(c) \neq 0$. Let
> $$
> y'_i = \sum_{j=1}^n c_{ij} x_j.
> $$
> Then $k(x)$ is separable algebraic over $k(y')$.

## Source Issue

> [!warning] Missing base-change subscript in part (a)
> The printed text says $k(y_1,\ldots,y_r)$ [S2, printed p. 375, PDF p. 390], as preserved above. The intended field is $k_u(y_1,\ldots,y_r)$. For $n=r=1$, with $x,u$ algebraically independent over $k$, the extension $k(u,x)/k(ux)$ has transcendence degree $1$ and is not algebraic. The solution proves the corrected statement over $k_u(y)$.

## Hints

> [!hint]- Hint 1: The differential criterion for separating transcendence bases
> Recall from Lang Chapter VIII §5 that for a finitely generated separable extension $K/k$ of transcendence degree $r$, elements $z_1, \ldots, z_r$ form a separating transcendence base if and only if their differentials $dz_1, \ldots, dz_r$ form a vector space basis of the Kähler differential space $\Omega_{K/k}^1$. What is the dimension of $\Omega_{k(x)/k}^1$?

> [!hint]- Hint 2: Differentials of linear combinations
> Compute the differentials $dy_i = \sum_{j=1}^n u_{ij} dx_j$ in the space $\Omega_{k_u(x)/k_u}^1$. Since the $dx_j$ span an $r$-dimensional space, how does a matrix of independent indeterminates $(u_{ij})$ act on this space?

> [!hint]- Hint 3: Specialization via non-vanishing minors
> Linear independence of $\{dy_1, \ldots, dy_r\}$ is governed by the non-vanishing of an $r \times r$ determinant in the entries $u_{ij}$. The determinant initially belongs to $K[u]$, where $K=k(x)$. Express its finitely many coefficients in a $k$-basis of their span; this writes the determinant as a $k$-linearly independent combination of polynomials in $k[u]$. How can one nonzero coordinate polynomial serve as $P$?

## Solution

> [!success]-
> ### Part (a): Separability of $k_u(x)$ over $k_u(y)$
> 
> Let $K = k(x) = k(x_1, \ldots, x_n)$ have transcendence degree $r \ge 1$ over $k$, and assume $K/k$ is separable.
> 
> 1. **Differentials of $K/k$**:
>    By Lang, Chapter VIII, §5, Proposition 5.5 [printed p. 372, PDF p. 387]:
>    Because $K/k$ is separable with transcendence degree $r$, the module of differentials $\Omega_{K/k}^1$ has dimension:
>    $$
>    \dim_K \Omega_{K/k}^1 = \operatorname{tr.deg}(K/k) = r.
>    $$
>    Furthermore, since $K = k(x_1, \ldots, x_n)$, the differentials $\{dx_1, \ldots, dx_n\}$ span $\Omega_{K/k}^1$ as a $K$-vector space.
>    Thus, there exists a subset of $r$ indices, say without loss of generality $\{1, \ldots, r\}$, such that $\{dx_1, \ldots, dx_r\}$ forms a basis of $\Omega_{K/k}^1$.
>    For each $j \in \{1, \ldots, n\}$, we can write
>    $$
>    dx_j = \sum_{l=1}^r a_{jl} dx_l \quad \text{with } a_{jl} \in K.
>    $$
> 
> 2. **Differentials in the base change $k_u$**:
>    The extension $k_u/k$ is purely transcendental, and $u_{ij}$ are algebraically independent over $K$.
>    A separating transcendence basis $t$ of $K/k$ remains algebraically independent over $k_u$, and $K(u)/k_u(t)$ is finite separable by base change of $K/k(t)$. Thus $K(u)/k_u$ is itself finitely generated and separably generated, as required when applying Proposition 5.5 below.
>    Therefore, $\Omega_{k_u(x)/k_u}^1 \cong k_u(x) \otimes_K \Omega_{K/k}^1$, so
>    $$
>    \dim_{k_u(x)} \Omega_{k_u(x)/k_u}^1 = r.
>    $$
>    In $\Omega_{k_u(x)/k_u}^1$, the $k_u$-linear differentials of $y_i = \sum_{j=1}^n u_{ij} x_j$ are:
>    $$
>    dy_i = \sum_{j=1}^n u_{ij} dx_j \quad (i = 1, \ldots, r).
>    $$
>    Substituting $dx_j = \sum_{l=1}^r a_{jl} dx_l$:
>    $$
>    dy_i = \sum_{l=1}^r \left(\sum_{j=1}^n u_{ij} a_{jl}\right) dx_l.
>    $$
>    Let $M(u)$ be the $r \times r$ matrix whose $(i, l)$-entry is
>    $$
>    M_{il}(u) = \sum_{j=1}^n u_{ij} a_{jl}.
>    $$
>    In matrix form, $M(u) = U \cdot A$, where $U = (u_{ij})_{r \times n}$ and $A = (a_{jl})_{n \times r}$.
>    Since $\{dx_1, \ldots, dx_r\}$ is a basis, the first $r$ rows of $A$ form the $r \times r$ identity matrix $I_r$.
>    Hence, if we restrict $U$ to the first $r$ columns, that minor is $(u_{il})_{1 \le i, l \le r}$.
>    The determinant $\det M(u)$ is a polynomial in the variables $u_{ij}$ with coefficients in $K$.
>    Setting $u_{il} = \delta_{il}$ (the Kronecker delta) for $l \le r$ and $u_{ij} = 0$ for $j > r$, the matrix $M(u)$ specializes to $I_r$, whose determinant is $1 \neq 0$.
>    Consequently, $\det M(u)$ is a **nonzero polynomial** in the indeterminates $u_{ij}$.
> 
> 3. **Application of the differential criterion**:
>    Because $u_{ij}$ are algebraically independent over $K$, $\det M(u) \neq 0$ in $k_u(x)$.
>    Therefore, the matrix $M(u)$ is invertible over $k_u(x)$.
>    This implies that the $r$ differentials $\{dy_1, \ldots, dy_r\}$ are linearly independent over $k_u(x)$ in $\Omega_{k_u(x)/k_u}^1$.
>    Since $\dim_{k_u(x)} \Omega_{k_u(x)/k_u}^1 = r$, $\{dy_1, \ldots, dy_r\}$ is a basis of $\Omega_{k_u(x)/k_u}^1$.
>    By Lang Chapter VIII §5, Proposition 5.5 (printed p. 372, PDF p. 387):
>    - $\{y_1, \ldots, y_r\}$ is algebraically independent over $k_u$;
>    - $k_u(x)$ is a separable algebraic extension of $k_u(y_1, \ldots, y_r)$.
> 
> ---
> 
> ### Part (b): A nonzero specialization polynomial over $k$
>
> Put $\Delta(u)=\det M(u)\in K[u]$. Part (a) proves that $\Delta$ is nonzero and that $\Delta(U_0)=1$ for $U_0=(I_r,0)$.
>
> Let $b_1,\ldots,b_s$ be a $k$-basis of the finite-dimensional subspace of $K$ spanned by all coefficients of $\Delta$. Expanding each coefficient in this basis gives
> $$
> \Delta(u)=\sum_{a=1}^s b_a P_a(u),\qquad P_a(u)\in k[u].
> $$
> At least one $P_a(U_0)$ is nonzero because $\Delta(U_0)=1$. Choose such an index $a$ and set $P=P_a$. In particular, $P$ is a nonzero polynomial over $k$.
>
> If $c=(c_{ij})\in k^{r\times n}$ and $P(c)\ne0$, then $\Delta(c)\ne0$: otherwise the equality $\sum_a b_aP_a(c)=0$ would contradict $k$-linear independence of the $b_a$. Therefore the differentials
> $$
> dy_i'=\sum_{j=1}^n c_{ij}\,dx_j\qquad(1\le i\le r)
> $$
> form a basis of $\Omega_{K/k}^1$. Proposition 5.5 implies that $y_1',\ldots,y_r'$ form a separating transcendence basis. Hence $K/k(y')$ is separable algebraic, and it is finite because $K/k$ is finitely generated.
>
> This argument uses only finitely many coefficients and works over finite as well as infinite fields. It does not use a field norm for the transcendental extension $K/k$.

## Related Concepts

- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]
- [[03 - Field Theory/Concepts/Derivations and Differentials on Fields|Derivations and Differentials on Fields]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Dual spaces as Hom spaces]]

## Notes

- **Source and proof status**: [S2, Ch. VIII, Exercise 6, printed p. 375, PDF p. 390]. The source statement in (a) is preserved with the correction explained above. The determinant and coefficient-space specialization proof is independently derived.
- **Imported criterion**: Lang VIII, Proposition 5.5, printed p. 372, PDF p. 387, identifies separating transcendence bases with bases of differentials for finitely generated separably generated extensions. Lang's dual-space description agrees here with the finite-dimensional Kähler differential space.
- **Meaning of generic**: The polynomial $P$ gives an explicit nonvanishing condition sufficient for the linear combinations to be a separating transcendence basis. The conclusion concerns function fields; no global finiteness or étaleness of a morphism is asserted without further geometric hypotheses.
