---
title: "Exercise LA382: Logarithmic Embedding and Finite Generation of the Unit Group"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - lattices
  - number-theory
  - dirichlet-unit-theorem
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VII, Extensions of Rings, Exercise 5, printed p. 353, PDF p. 368"
created: 2026-09-15
---

# Exercise LA382: Logarithmic Embedding and Finite Generation of the Unit Group

## Problem Statement

> [!question] Lang, Chapter VII, Exercise 5
> Let $E$ be a finite extension of $\mathbb Q$, and let $\mathfrak o_E$ be the ring of algebraic integers of $E$. Let $U$ be the group of units of $\mathfrak o_E$. Let $\sigma_1,\ldots,\sigma_n$ be the distinct embeddings of $E$ into $\mathbb C$. Map $U$ into a Euclidean space, by the map
> $$
> l: U \longrightarrow \mathbb R^n,\qquad l(u) = (\log |\sigma_1(u)|,\ldots,\log |\sigma_n(u)|).
> $$
> Show that $l(U)$ is a free abelian group, finitely generated, by showing that in any finite region of space, there is only a finite number of elements of $l(U)$. Show that the kernel of $l$ is a finite group, and is therefore the group of roots of unity in $E$. Thus $U$ itself is a finitely generated abelian group.

## Hints

> [!hint]- Hint 1: Verify that $l$ is a group homomorphism
> Show that $l(uv)=l(u)+l(v)$ using $|\sigma_i(uv)|=|\sigma_i(u)|\cdot|\sigma_i(v)|$. Where does the norm identity $N_{E/\mathbb Q}(u)=\pm 1$ place the image $l(U)$?

> [!hint]- Hint 2: Deduce boundedness of conjugates from bounded regions
> If $|l(u)_i| \le C$ for all $i$, what bounds can you establish on $|\sigma_i(u)|$? How does this allow you to apply the finiteness result from Exercise 4?

> [!hint]- Hint 3: Characterize the kernel of $l$
> Show that $u\in\ker(l)$ if and only if $|\sigma_i(u)|=1$ for every embedding $\sigma_i$. Show that this forces $\ker(l)$ to be a finite subgroup of $E^\times$, and apply the classification of finite subgroups of field multiplicative groups.

> [!hint]- Hint 4: Split the exact sequence
> Use the fact that any extension of a free abelian group splits: $U \cong \ker(l) \oplus l(U)$.

## Solution

> [!success]- solultion
> Let $E/\mathbb Q$ be a number field of degree $n=[E:\mathbb Q]$, and let $\mathfrak o_E$ be its ring of algebraic integers. Let $U=\mathfrak o_E^\times$ denote the multiplicative group of units of $\mathfrak o_E$.
> 
> Let $\sigma_1,\ldots,\sigma_n: E \hookrightarrow \mathbb C$ be the $n$ distinct embeddings of $E$ into $\mathbb C$.
> 
> ### Step 1: The logarithmic map $l$ is a homomorphism
> For any two units $u,v\in U$ and each index $i\in\{1,\ldots,n\}$:
> $$
> |\sigma_i(uv)| = |\sigma_i(u)\sigma_i(v)| = |\sigma_i(u)|\cdot|\sigma_i(v)|.
> $$
> Taking real logarithms:
> $$
> \log|\sigma_i(uv)| = \log|\sigma_i(u)| + \log|\sigma_i(v)|.
> $$
> Therefore, the map:
> $$
> l: U \longrightarrow \mathbb R^n,\qquad l(u) = (\log|\sigma_1(u)|,\ldots,\log|\sigma_n(u)|)
> $$
> is a group homomorphism from the multiplicative group $(U,\cdot)$ to the additive group $(\mathbb R^n,+)$.
> 
> Furthermore, since $u\in U$, its norm satisfies $N_{E/\mathbb Q}(u) = \prod_{i=1}^n \sigma_i(u) = \pm 1$. Taking absolute values and logarithms:
> $$
> \sum_{i=1}^n \log|\sigma_i(u)| = \log\left(\prod_{i=1}^n |\sigma_i(u)|\right) = \log|N_{E/\mathbb Q}(u)| = \log(1) = 0.
> $$
> Thus the image $l(U)$ is contained in the trace-zero hyperplane $H = \{(x_1,\ldots,x_n)\in\mathbb R^n : \sum_{i=1}^n x_i = 0\}$, which has dimension $n-1$.
> 
> ### Step 2: Finiteness of $l(U)$ in bounded regions
> Let $B\subset\mathbb R^n$ be an arbitrary bounded region (a finite region of space). There exists a real constant $C>0$ such that for all $x=(x_1,\ldots,x_n)\in B$:
> $$
> |x_i| \le C\qquad\text{for all }i=1,\ldots,n.
> $$
> 
> If $u\in U$ satisfies $l(u)\in B$, then:
> $$
> |\log|\sigma_i(u)|| \le C \iff -C \le \log|\sigma_i(u)| \le C \iff e^{-C} \le |\sigma_i(u)| \le e^C
> $$
> for all $i=1,\ldots,n$.
> 
> In particular, setting $M=e^C$, every conjugate of $u$ is bounded in absolute value:
> $$
> |\sigma_i(u)| \le M\qquad\text{for all }i=1,\ldots,n.
> $$
> 
> By Exercise 4, any bounded region of Euclidean space contains only a finite number of elements of the integer ring $\mathfrak o_E$. Since $U\subseteq\mathfrak o_E$, the set:
> $$
> \{u\in U : |\sigma_i(u)| \le M\text{ for all }i=1,\ldots,n\}
> $$
> is a finite subset of $\mathfrak o_E$.
> 
> Because the preimage $l^{-1}(B)$ is contained in this finite set, there can only be a **finite number of elements** $u\in U$ such that $l(u)\in B$.
> 
> Consequently, the intersection $l(U)\cap B$ is finite.
> 
> ### Step 3: $l(U)$ is a finitely generated free abelian group
> Since every bounded subset of $\mathbb R^n$ contains only finitely many points of $l(U)$, $l(U)$ has no accumulation points. Thus $l(U)$ is a **discrete subgroup** of $\mathbb R^n$.
> 
> By Exercise 5 of Chapter III, every discrete subgroup of a finite-dimensional real vector space is a lattice in its real span, and hence is a **free abelian group** of finite rank:
> $$
> l(U) \cong \mathbb Z^r,\qquad\text{with }r \le n-1.
> $$
> 
> ### Step 4: The kernel of $l$ is the group of roots of unity
> The kernel of $l$ is:
> $$
> \ker(l) = \{u\in U : l(u) = 0\} = \{u\in U : |\sigma_i(u)| = 1\text{ for all }i=1,\ldots,n\}.
> $$
> 
> Applying the finiteness result of Step 2 to the bounded set $\{0\}\subset\mathbb R^n$ (where $C=0$), the set $\ker(l)=l^{-1}(\{0\})$ is **finite**.
> 
> As a finite subgroup of the multiplicative group $E^\times$ of a field, $\ker(l)$ must be **cyclic**, and every element of $\ker(l)$ must have finite order.
> 
> An element $u\in E^\times$ has finite order if and only if $u^m=1$ for some integer $m\ge1$, meaning $u$ is a root of unity in $E$.
> 
> Conversely, if $\zeta\in E$ is a root of unity with $\zeta^m=1$, then for every embedding $\sigma_i$:
> $$
> |\sigma_i(\zeta)|^m = |\sigma_i(\zeta^m)| = |1| = 1 \implies |\sigma_i(\zeta)| = 1,
> $$
> so $\log|\sigma_i(\zeta)|=0$ for all $i$, whence $\zeta\in\ker(l)$.
> 
> Therefore:
> $$
> \ker(l) = \mu(E),
> $$
> where $\mu(E)$ is the finite cyclic group of roots of unity contained in $E$.
> 
> ### Step 5: Finite generation of $U$
> We have the short exact sequence of abelian groups:
> $$
> 1 \longrightarrow \mu(E) \longrightarrow U \xrightarrow{\quad l\quad} l(U) \longrightarrow 0.
> $$
> 
> Because $l(U)\cong\mathbb Z^r$ is a free abelian group, it is a projective $\mathbb Z$-module. Every short exact sequence ending in a free abelian group splits:
> $$
> U \cong \mu(E) \times l(U) \cong \mu(E) \times \mathbb Z^r.
> $$
> 
> Since $\mu(E)$ is finite and $l(U)\cong\mathbb Z^r$ is generated by $r$ elements, $U$ is a **finitely generated abelian group**.



## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Dirichlet's Unit Theorem:** This exercise proves the structural part of Dirichlet's Unit Theorem: $U \cong \mu(E) \times \mathbb Z^r$. The deeper analytical content of Dirichlet's theorem establishes the exact rank $r = r_1 + r_2 - 1$, where $r_1$ is the number of real embeddings and $r_2$ is the number of conjugate pairs of complex embeddings (so $n = r_1 + 2r_2$).
- **Regulator:** The covolume of the lattice $l(U)$ inside the hyperplane $\sum x_i = 0$ is proportional to the **Dirichlet regulator** $R_E$, a fundamental arithmetic invariant of the number field.
- **Independent Derivation:** The proof combines the discrete lattice property of Chapter III §5 with the minimal polynomial coefficient bounds of Exercise 4.
