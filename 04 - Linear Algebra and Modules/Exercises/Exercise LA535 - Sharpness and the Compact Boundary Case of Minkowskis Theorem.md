---
title: "Exercise LA535: Sharpness and the Compact Boundary Case of Minkowski's Theorem"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §4, Exercise 2, printed p. 27, PDF p. 46"
created: 2026-10-17
---

# Exercise LA535: Sharpness and the Compact Boundary Case of Minkowski's Theorem

## Problem Statement

> [!question] Neukirch I.4.2
> Show that Minkowski's lattice point theorem cannot be improved, by giving an example of a centrally symmetric convex set $X\subseteq V$ such that $\operatorname{vol}(X)=2^n\operatorname{vol}(\Gamma)$ which does not contain any nonzero point of the lattice $\Gamma$.
>
> If $X$ is compact, however, then the statement (4.4) does remain true in the case of equality.

> [!info] Scope and notation
> Work in an $n$-dimensional real Euclidean vector space $V$ with $n\ge1$, and let $\Gamma$ be a complete, or full, lattice in $V$. Central symmetry here means symmetry about the origin: $-X=X$. The notation $\operatorname{vol}(\Gamma)$ denotes the positive **covolume**, namely the volume of a fundamental parallelepiped, rather than the Lebesgue measure of the discrete subset $\Gamma$.

## Hints

> [!hint]- Hint 1: Keep the first lattice points on the boundary
> For $\Gamma=\mathbb Z^n$, consider the open cube $(-1,1)^n$. More generally, carry this cube to $V$ using the linear map whose columns are a lattice basis. Check its volume and its lattice points separately.

> [!hint]- Hint 2: Enlarge a compact set slightly
> If $\operatorname{vol}(X)=2^n\operatorname{vol}(\Gamma)$, the dilates $X_k=(1+1/k)X$ satisfy the strict volume inequality in Minkowski's theorem (4.4). First show that $0\in X$ and that these dilates lie in the fixed bounded set $2X$.

> [!hint]- Hint 3: Retain a nonzero point in the limit
> Each $X_k$ contains a nonzero lattice point. A bounded set meets a lattice in finitely many points, so one such point occurs for infinitely many $k$. Divide that fixed point by $1+1/k$ and use the closedness of $X$.

## Solution

> [!success]- Independent derivation
> Let $n\ge1$ and let $\Gamma$ be a complete lattice in the Euclidean vector space $V$ of dimension $n$. Choose a lattice basis $b_1,\ldots,b_n$ and define the linear isomorphism
> $$
> B:\mathbb R^n\longrightarrow V,\qquad
> B(t_1,\ldots,t_n)=\sum_{i=1}^n t_i b_i.
> $$
> Then $\Gamma=B\mathbb Z^n$. Relative to orthonormal coordinates on $V$, the determinant gives its covolume
> $$
> c=\operatorname{vol}(\Gamma)
> =\operatorname{vol}\bigl(B[0,1)^n\bigr)
> =|\det B|>0.
> $$
>
> **1. An equality example without a nonzero lattice point.** Put
> $$
> X=B(-1,1)^n
> =\left\{\sum_{i=1}^n t_i b_i:-1<t_i<1\text{ for every }i\right\}.
> $$
> The open cube is convex and invariant under multiplication by $-1$, and a linear map preserves both properties. Thus $X$ is centrally symmetric and convex. Linear change of variables for Euclidean volume gives
> $$
> \operatorname{vol}(X)=|\det B|\operatorname{vol}((-1,1)^n)
> =2^n c=2^n\operatorname{vol}(\Gamma).
> $$
> If $\gamma\in X\cap\Gamma$, write $\gamma=Bm$ with $m\in\mathbb Z^n$. Injectivity of $B$ and membership in $X$ force $-1<m_i<1$ for each integer coordinate $m_i$, hence $m_i=0$ for all $i$. Consequently
> $$
> X\cap\Gamma=\{0\}.
> $$
> This proves that the strict inequality in (4.4) cannot be replaced by a weak inequality for arbitrary centrally symmetric convex sets. The example is bounded but not closed, and therefore is not compact. Its closure contains the nonzero boundary points $\pm b_i$.
>
> **2. State the strict theorem used for the compact case.** Minkowski's lattice point theorem (4.4) says: if $\Gamma$ is a complete lattice in an $n$-dimensional real Euclidean space and $Y\subseteq V$ is centrally symmetric about $0$ and convex, then
> $$
> \operatorname{vol}(Y)>2^n\operatorname{vol}(\Gamma)
> \quad\Longrightarrow\quad
> Y\cap(\Gamma\setminus\{0\})\neq\varnothing.
> $$
> This theorem is proved in [S4, Ch. I, §4, Theorem (4.4), printed p. 27, PDF p. 46]. We use its strict form as an input.
>
> **3. Form nested dilates of a compact equality case.** Now suppose $X\subseteq V$ is compact, centrally symmetric, and convex, with
> $$
> \operatorname{vol}(X)=2^n c.
> $$
> Since $c>0$, the volume is positive and $X$ is nonempty. Choose $x\in X$. Symmetry gives $-x\in X$, and convexity then gives $0=(x+(-x))/2\in X$.
>
> Whenever $0\le s\le t$ and $t>0$, convexity and $0\in X$ imply $(s/t)x\in X$ for every $x\in X$. Thus
> $$
> sX\subseteq tX.
> $$
> For $k\ge1$, put $t_k=1+1/k$ and $X_k=t_kX$. These are compact, centrally symmetric convex sets, and
> $$
> X\subseteq X_{k+1}\subseteq X_k\subseteq2X.
> $$
> Because $n\ge1$ and $t_k>1$, volume scaling yields
> $$
> \operatorname{vol}(X_k)
> =t_k^n\operatorname{vol}(X)
> =t_k^n2^n c>2^n c.
> $$
> The strict theorem therefore supplies a nonzero point $\gamma_k\in\Gamma\cap X_k$ for every $k$.
>
> **4. Use lattice finiteness and closedness.** The set $2X$ is bounded because $X$ is compact. The inverse linear map $B^{-1}$ sends bounded sets to bounded sets. Hence each integer coordinate of a point of $B^{-1}(2X)\cap\mathbb Z^n$ lies in a fixed bounded interval. There are only finitely many possible integer coordinate tuples, proving that $\Gamma\cap2X$ is finite.
>
> All $\gamma_k$ belong to its finite subset $(\Gamma\setminus\{0\})\cap2X$. The infinite pigeonhole principle gives a fixed nonzero $\gamma\in\Gamma$ and an increasing sequence $k_j\to\infty$ with $\gamma_{k_j}=\gamma$. Since $\gamma\in t_{k_j}X$,
> $$
> \frac{\gamma}{t_{k_j}}\in X,
> \qquad
> \frac{\gamma}{t_{k_j}}\longrightarrow\gamma.
> $$
> A compact subset of the Euclidean space $V$ is closed, so the limit $\gamma$ belongs to $X$. We have obtained $\gamma\in X\cap\Gamma$ with $\gamma\neq0$, proving the compact equality case.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[01 - Group Theory/Concepts/Discrete and Dense Subgroups|Discrete and Dense Subgroups]]

## Notes

- **Source verification:** The complete two-task exercise and the strict theorem immediately above it were checked against the rendered original at [S4, Ch. I, §4, Exercise 2 and Theorem (4.4), printed p. 27, PDF p. 46]. The first task asks for an equality counterexample; the second restores the nonzero-point conclusion under compactness. No source figure is needed.
- **Proof status and inputs:** The strict version of (4.4) is an imported theorem proved in the source. The open parallelepiped counterexample, nested dilations, bounded-lattice finiteness argument, and constant-subsequence limit above are independent derivations. Additional standard inputs are linear change of variables and dilation scaling for Euclidean volume, boundedness and closedness of compact subsets of a finite-dimensional Euclidean space, and the infinite pigeonhole principle.
- **Boundary of the conclusion:** Compactness supplies both a common bounded region for the lattice points and closedness to retain the limit. Boundedness alone does not suffice, as the open parallelepiped shows. The origin-symmetry convention is essential to the stated Minkowski theorem and to the dilation inclusions.
- **Zero-dimensional convention:** The nonzero-point equality conclusion is stated here for $n\ge1$. If $V=\{0\}$ and $\Gamma=\{0\}$, the usual zero-dimensional volume gives $\operatorname{vol}(\{0\})=\operatorname{vol}(\Gamma)=1$. Then $X=\{0\}$ is compact and satisfies the equality, but there is no nonzero point. The strict theorem has no equality implication in this degenerate dimension; the dilation step also fails to make volume strictly larger when $n=0$.
- **Routing:** Linear Algebra and Modules is primary because lattice bases, determinant covolumes, linear dilations, and finite-dimensional Euclidean topology govern both arguments.
