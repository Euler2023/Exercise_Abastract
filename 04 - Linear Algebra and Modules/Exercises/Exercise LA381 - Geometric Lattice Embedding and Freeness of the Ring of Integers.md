---
title: "Exercise LA381: Geometric Lattice Embedding and Freeness of the Ring of Integers"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - lattices
  - number-theory
  - free-modules
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VII, Extensions of Rings, Exercise 4, printed p. 353, PDF p. 368"
created: 2026-09-15
---

# Exercise LA381: Geometric Lattice Embedding and Freeness of the Ring of Integers

## Problem Statement

> [!question] Lang, Chapter VII, Exercise 4
> The preceding exercise applies to the case when $A=\mathbb Z$ and $k=\mathbb Q$. Let $L$ be a finite extension of $\mathbb Q$ and let $\mathfrak o_L$ be the ring of algebraic integers in $L$. Let $\sigma_1,\ldots,\sigma_n$ be the distinct embeddings of $L$ into the complex numbers. Embed $\mathfrak o_L$ into a Euclidean space by the map
> $$
> \alpha \longmapsto (\sigma_1(\alpha),\ldots,\sigma_n(\alpha)).
> $$
> Show that in any bounded region of space, there is only a finite number of elements of $\mathfrak o_L$.
> 
> [Hint: The coefficients in an integral equation for $\alpha$ are elementary symmetric functions of the conjugates of $\alpha$ and thus are bounded integers.]
> 
> Use Exercise 5 of Chapter III to conclude that $\mathfrak o_L$ is a free $\mathbb Z$-module of dimension $\le n$. In fact, show that the dimension is $n$, a basis of $\mathfrak o_L$ over $\mathbb Z$ also being a basis of $L$ over $\mathbb Q$.

## Hints

> [!hint]- Hint 1: Express coefficients of the minimal polynomial via conjugates
> If $\alpha\in\mathfrak o_L$, its conjugates are $\sigma_1(\alpha),\ldots,\sigma_n(\alpha)$. What can you say about the coefficients of the polynomial $\prod_{i=1}^n (X-\sigma_i(\alpha))$ when all conjugates are bounded in absolute value by $M$?

> [!hint]- Hint 2: Discreteness from finiteness of bounded integer polynomials
> Bounded integers form a finite set. Show that there are only finitely many integer polynomials of degree $n$ with bounded coefficients, each of which can have at most $n$ roots.

> [!hint]- Hint 3: Conclude freeness from discrete subgroups of Euclidean space
> Exercise 5 of Chapter III establishes that any discrete subgroup of $\mathbb R^N$ is a free abelian group of rank at most $N$. How does the rank of $\mathfrak o_L$ relate to $[L:\mathbb Q]=n$?

## Solution

> [!success]- Complete Derivation
> Let $L/\mathbb Q$ be a number field of degree $n=[L:\mathbb Q]$, and let $\mathfrak o_L$ be its ring of algebraic integers. There are exactly $n$ distinct embeddings of $L$ into $\mathbb C$, denoted $\sigma_1,\ldots,\sigma_n$.
> 
> ### Step 1: The geometric embedding
> Consider the map:
> $$
> \iota: L \longrightarrow \mathbb C^n \cong \mathbb R^{2n},\qquad \iota(\alpha) = (\sigma_1(\alpha),\ldots,\sigma_n(\alpha)).
> $$
> Identifying $\mathbb C^n$ with $\mathbb R^{2n}$ endowed with the standard Euclidean metric, a subset $B\subset\mathbb C^n$ is bounded if and only if there exists a positive real constant $M>0$ such that for all $z=(z_1,\ldots,z_n)\in B$:
> $$
> |z_i| \le M\qquad\text{for all }i=1,\ldots,n.
> $$
> 
> ### Step 2: Finiteness of $\mathfrak o_L$ in bounded regions
> Let $B\subset\mathbb C^n$ be a bounded region with bound $M$. Suppose $\alpha\in\mathfrak o_L$ satisfies $\iota(\alpha)\in B$. Then:
> $$
> |\sigma_i(\alpha)| \le M\qquad\text{for each }i=1,\ldots,n.
> $$
> 
> Consider the characteristic polynomial of $\alpha$ relative to $L/\mathbb Q$:
> $$
> P_\alpha(X) = \prod_{i=1}^n (X - \sigma_i(\alpha)) = X^n + a_{n-1} X^{n-1} + \cdots + a_1 X + a_0.
> $$
> 
> By elementary symmetric polynomials, each coefficient $a_{n-k}$ is given by:
> $$
> a_{n-k} = (-1)^k s_k(\sigma_1(\alpha),\ldots,\sigma_n(\alpha)) = (-1)^k \sum_{1\le i_1 < \cdots < i_k \le n} \sigma_{i_1}(\alpha)\cdots\sigma_{i_k}(\alpha).
> $$
> 
> Applying the triangle inequality and the bound $|\sigma_i(\alpha)|\le M$:
> $$
> |a_{n-k}| \le \sum_{1\le i_1 < \cdots < i_k \le n} |\sigma_{i_1}(\alpha)|\cdots|\sigma_{i_k}(\alpha)| \le \binom{n}{k} M^k.
> $$
> 
> Because $\alpha\in\mathfrak o_L$, $\alpha$ is integral over $\mathbb Z$. Since $\mathbb Z$ is integrally closed in $\mathbb Q$, the minimal polynomial of $\alpha$ over $\mathbb Q$ has integer coefficients. Because $P_\alpha(X)$ is a power of the minimal polynomial, all coefficients of $P_\alpha(X)$ are integers:
> $$
> a_{n-k} \in \mathbb Z\qquad\text{for each }k=1,\ldots,n.
> $$
> 
> The set of integers satisfying $|a_{n-k}| \le \binom{n}{k} M^k$ is a bounded subset of $\mathbb Z$, hence is **finite**.
> 
> Therefore, there are only finitely many monic polynomials $P(X)\in\mathbb Z[X]$ of degree $n$ that can arise as the characteristic polynomial of an element $\alpha\in\mathfrak o_L$ with $\iota(\alpha)\in B$.
> 
> Each such polynomial has at most $n$ complex roots. Since any $\alpha\in\mathfrak o_L$ is a root of its characteristic polynomial $P_\alpha(X)$, the number of elements $\alpha\in\mathfrak o_L$ satisfying $\iota(\alpha)\in B$ is **finite**.
> 
> ### Step 3: Freeness and rank of $\mathfrak o_L$ as a $\mathbb Z$-module
> Since every bounded region in $\mathbb R^{2n}$ contains only finitely many points of $\iota(\mathfrak o_L)$, the image $\iota(\mathfrak o_L)$ contains no accumulation points. Thus $\iota(\mathfrak o_L)$ is a **discrete subgroup** of the Euclidean space $\mathbb R^{2n}$.
> 
> By Exercise 5 of Chapter III (every discrete additive subgroup of a finite-dimensional real Euclidean space is a lattice, i.e., a free abelian group of finite rank), $\iota(\mathfrak o_L)$ is a free $\mathbb Z$-module of finite rank $r$.
> 
> Since $\iota$ is an injective group homomorphism ($\sigma_1(\alpha)=0 \implies \alpha=0$), $\mathfrak o_L \cong \iota(\mathfrak o_L)$ is a **free $\mathbb Z$-module** of rank $r$.
> 
> ### Step 4: Showing the rank is exactly $n$
> 1. **Upper bound ($r\le n$):**
>    Any elements $\beta_1,\ldots,\beta_m\in\mathfrak o_L$ that are linearly independent over $\mathbb Z$ are also linearly independent over $\mathbb Q$: if $\sum_{j=1}^m \frac{p_j}{q_j} \beta_j = 0$ with $p_j, q_j\in\mathbb Z$, multiplying by $Q = \prod q_j$ gives a non-trivial $\mathbb Z$-linear relation $\sum_{j=1}^m (Q p_j/q_j)\beta_j = 0$, a contradiction.
>    Since $\dim_{\mathbb Q} L = n$, $L$ cannot contain more than $n$ elements linearly independent over $\mathbb Q$. Thus:
>    $$
>    r = \operatorname{rank}_{\mathbb Z}(\mathfrak o_L) \le n.
>    $$
> 
> 2. **Lower bound ($r\ge n$):**
>    Let $\{v_1,\ldots,v_n\}$ be an arbitrary basis of $L$ over $\mathbb Q$. For each $v_i$, there exists an integer $d_i\in\mathbb Z\setminus\{0\}$ such that $d_i v_i\in\mathfrak o_L$.
>    Setting $d = \prod_{i=1}^n d_i \in \mathbb Z\setminus\{0\}$, the elements:
>    $$
>    w_i = d v_i\in\mathfrak o_L\qquad (i=1,\ldots,n)
>    $$
>    are linearly independent over $\mathbb Q$, and hence linearly independent over $\mathbb Z$.
>    Since $\mathfrak o_L$ contains $n$ elements linearly independent over $\mathbb Z$, its rank satisfies:
>    $$
>    r = \operatorname{rank}_{\mathbb Z}(\mathfrak o_L) \ge n.
>    $$
> 
> Combining both bounds:
> $$
> \operatorname{rank}_{\mathbb Z}(\mathfrak o_L) = n = [L:\mathbb Q].
> $$
> 
> Let $\{u_1,\ldots,u_n\}$ be a basis of $\mathfrak o_L$ over $\mathbb Z$. Since $\mathfrak o_L$ spans $L$ over $\mathbb Q$ (every $x\in L$ has $dx\in\mathfrak o_L$), $\{u_1,\ldots,u_n\}$ spans $L$ over $\mathbb Q$. Because $|u_i|=n=\dim_{\mathbb Q} L$, $\{u_1,\ldots,u_n\}$ is also a basis of $L$ over $\mathbb Q$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]

## Notes

- **Geometric vs. Algebraic Proof:** Exercise 3 proved that $\mathfrak o_L$ is a finitely generated module over $\mathbb Z$ by purely algebraic means (trace dual bases). Exercise 4 supplies the complementary geometric perspective via Minkowski embedding and discreteness in Euclidean space.
- **Integral Basis:** A $\mathbb Z$-basis of $\mathfrak o_L$ is classically known as an **integral basis** of the number field $L$. Its discriminant is the fundamental field discriminant $d_L$.
- **Independent Derivation:** The solution relies on elementary symmetric polynomial bounds and the classification of discrete subgroups from Chapter III.
