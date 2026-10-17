---
title: "Exercise LA534: Complete Lattices and Compact Quotients"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §4, Exercise 1, printed p. 27, PDF p. 46"
created: 2026-10-17
---

# Exercise LA534: Complete Lattices and Compact Quotients

## Problem Statement

> [!question] Neukirch I.4.1
> Show that a lattice $\Gamma$ in $\mathbb R^n$ is complete if and only if the quotient $\mathbb R^n/\Gamma$ is compact.

## Hints

> [!hint]- Hint 1: Fix the topology and the meaning of complete
> Write $\Gamma=\mathbb Zv_1+\cdots+\mathbb Zv_r$ with real-linearly independent $v_i$. In the source, complete means $r=n$. Give the coset space $\mathbb R^n/\Gamma$ its quotient topology under the natural map $q$.

> [!hint]- Hint 2: Use a closed parallelepiped for a complete lattice
> When $r=n$, subtract the integer parts of the coordinates in the basis $v_1,\ldots,v_n$. Every coset has a representative in the closed parallelepiped with all coordinates in $[0,1]$. This parallelepiped is a continuous image of the compact cube $[0,1]^n$.

> [!hint]- Hint 3: A missing real direction survives in the quotient
> If $W=\operatorname{span}_{\mathbb R}(\Gamma)$ is proper, choose a nonzero real linear functional $\ell:\mathbb R^n\to\mathbb R$ vanishing on $W$. It is constant on each coset of $\Gamma$, so it induces a continuous surjection $\mathbb R^n/\Gamma\to\mathbb R$. Use that $\mathbb R$ is not compact.

## Solution

> [!success]- Independent derivation
> By the source definition, a lattice has the form
> $$
> \Gamma=\mathbb Zv_1+\cdots+\mathbb Zv_r,
> \qquad 0\le r\le n,
> $$
> where $v_1,\ldots,v_r$ are linearly independent over $\mathbb R$. It is **complete** precisely when $r=n$, equivalently when its real span is $\mathbb R^n$.
>
> Put $X=\mathbb R^n/\Gamma$, the additive coset space, and let $q:\mathbb R^n\to X$ be the natural map $x\mapsto x+\Gamma$. We use the quotient topology:
> $$
> U\subseteq X\text{ is open}
> \quad\Longleftrightarrow\quad
> q^{-1}(U)\text{ is open in }\mathbb R^n.
> $$
> Thus $q$ is continuous. This is a quotient of additive topological groups; we do not treat $X$ as a real vector-space quotient, since $\Gamma$ is generally not a real linear subspace.
>
> **1. The quotient is Hausdorff.** Extend $v_1,\ldots,v_r$ to a real basis of $\mathbb R^n$. The associated invertible linear coordinate map identifies $\Gamma$ with $\mathbb Z^r\times\{0\}^{n-r}$, which is closed. Hence $\Gamma$ is closed in $\mathbb R^n$.
>
> The map $q$ is also open: if $O\subseteq\mathbb R^n$ is open, then
> $$
> q^{-1}(q(O))=\bigcup_{\gamma\in\Gamma}(O+\gamma)
> $$
> is open, so $q(O)$ is open by the quotient topology. If $q(x)\ne q(y)$, then $x-y\notin\Gamma$. Closedness of $\Gamma$ gives $\varepsilon>0$ such that the open ball $B(x-y,2\varepsilon)$ misses $\Gamma$. The open sets $q(B(x,\varepsilon))$ and $q(B(y,\varepsilon))$ are disjoint: a common coset would give $u\in B(x,\varepsilon)$ and $v\in B(y,\varepsilon)$ with $u-v\in\Gamma\cap B(x-y,2\varepsilon)$, a contradiction. Thus distinct cosets have disjoint open neighborhoods.
>
> **2. A complete lattice has compact quotient.** Assume $r=n$ and define the closed fundamental parallelepiped
> $$
> P=\left\{\sum_{i=1}^n t_iv_i:0\le t_i\le1\right\}.
> $$
> The cube $[0,1]^n$ is compact by the Heine–Borel theorem, and the map $(t_i)\mapsto\sum_i t_iv_i$ is continuous. Its image $P$ is therefore compact.
>
> For any $x\in\mathbb R^n$, write $x=\sum_i a_iv_i$ with $a_i\in\mathbb R$, and put $k_i=\lfloor a_i\rfloor$. Then
> $$
> x-\sum_{i=1}^n k_iv_i
> =\sum_{i=1}^n(a_i-k_i)v_i\in P,
> \qquad \sum_{i=1}^n k_iv_i\in\Gamma.
> $$
> Thus every coset has a representative in $P$, so $q(P)=X$. A continuous image of a compact space has the finite-subcover property; together with the Hausdorff property from Step 1, this proves that $X$ is compact.
>
> **3. A compact quotient forces completeness.** Suppose instead that $r<n$. Extend $v_1,\ldots,v_r$ to a real basis $v_1,\ldots,v_n$ and define the real linear functional $\ell$ by
> $$
> \ell(v_{r+1})=1,
> \qquad \ell(v_i)=0\quad(i\ne r+1).
> $$
> It is continuous, vanishes on $\operatorname{span}_{\mathbb R}(\Gamma)$, and is onto $\mathbb R$ because $\ell(tv_{r+1})=t$. Since $\ell(x+\gamma)=\ell(x)$ for $\gamma\in\Gamma$, the formula
> $$
> \overline\ell:X\longrightarrow\mathbb R,
> \qquad \overline\ell(q(x))=\ell(x)
> $$
> defines a well-defined surjection. It is continuous: for open $O\subseteq\mathbb R$,
> $$
> q^{-1}\!\left(\overline\ell^{-1}(O)\right)=\ell^{-1}(O)
> $$
> is open, and the quotient topology gives that $\overline\ell^{-1}(O)$ is open in $X$.
>
> If $X$ were compact, its continuous image $\mathbb R$ would have the finite-subcover property. But the open cover $\{(-m,m):m\ge1\}$ of $\mathbb R$ has no finite subcover. This contradiction rules out $r<n$. Hence $r=n$ and $\Gamma$ is complete.
>
> When $n=0$, the only lattice is $\Gamma=\{0\}$ of rank $0$. It is complete, and $\mathbb R^0/\Gamma$ is a single point, hence compact. This also agrees with Step 2, where the empty-coordinate cube and parallelepiped each consist of one point.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]]

## Notes

- **Source verification:** The complete problem was visually checked at [S4, Ch. I, §4, Exercise 1, printed p. 27, PDF p. 46]. There is no printed hint and no source figure to preserve. Definition (4.1), including the lattice basis, fundamental mesh, and the meaning of complete, was checked at [printed p. 24, PDF p. 43]. The source also proves closedness of a discrete subgroup in the proof of Proposition (4.2), printed p. 25 / PDF p. 44; Step 1 gives a coordinate proof for a lattice directly.
- **Proof status and inputs:** This is an independent derivation. It imports the finite-dimensional basis-extension theorem, continuity of real linear maps, the Heine–Borel theorem for the closed cube, and preservation of the finite-subcover property under continuous images. The quotient topology, Hausdorff property, surjectivity from the closed parallelepiped, and descent of the linear functional are explained in the proof. Minkowski's theorem is not used.
- **Terminology:** Complete here means full rank in the ambient real vector space. It is not metric completeness of $\Gamma$. The quotient topology is essential to the compactness assertion. The proof establishes both Hausdorffness and the finite-subcover property, so it is valid under either usual convention for the word compact.
- **Routing:** The primary construction uses a lattice basis, real coordinate reduction, and a linear functional detecting a missing direction. Linear Algebra and Modules is the destination; elementary topology supplies the compactness criterion.
