---
title: "Exercise LA685: Compact Matrix Groups Have Finitely Many Components"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 15, printed pp. 74–75, PDF pp. 86–87"
source_refs:
  - "S10/ch-3/sec-9/ex-15"
created: 2026-11-25
---

# Exercise LA685: Compact Matrix Groups Have Finitely Many Components

## Problem Statement

> [!question] Original Chapter 3, Exercise 15
> If $G$ is a matrix Lie group, a **component** of $G$ is the collection of all points that can be connected to a fixed $A\in G$ by a continuous path in $G$. Show that if $G$ is compact, $G$ has only finitely many components.
>
> *Hint:* Suppose $G$ had infinitely many components and consider a sequence $A_j$ with each element of the sequence in a different component. Extract a convergent subsequence and $B_k=A_{j_k}$ and consider $B_k^{-1}B_{k+1}$.

## Hints

> [!hint]- Hint 1
> The limits of both $B_k$ and $B_{k+1}$ lie in $G$, so their quotient converges to the identity.

> [!hint]- Hint 2
> Use the exponential chart near the identity to connect $I$ to $B_k^{-1}B_{k+1}$. Multiply that path on the left by $B_k$.

## Solution

> [!success]- Solution
> Suppose there are infinitely many path components, and choose a sequence $A_j$ whose elements lie in distinct components. Since $G$ is a compact metrizable space, some subsequence $B_k=A_{j_k}$ converges to a point $B\in G$. Inversion and multiplication are continuous on the ambient general linear group. Therefore
> $$
> B_k^{-1}B_{k+1}\longrightarrow B^{-1}B=I.
> $$
>
> Let $\mathfrak g$ denote the Lie algebra of $G$. Hall's Corollary 3.44 gives a neighborhood $V$ of $I$ in $G$ consisting of exponentials $e^X$ with $X\in\mathfrak g$ [S10, §3.8, printed p. 70, PDF p. 82]. For all sufficiently large $k$ we can write $B_k^{-1}B_{k+1}=e^{X_k}$ with $X_k\in\mathfrak g$.
>
> By Definition 3.18, $e^{tX_k}\in G$ for every real $t$ [S10, §3.3, printed p. 56, PDF p. 68]. The map
> $$
> [0,1]\longrightarrow G,\qquad t\longmapsto B_ke^{tX_k}
> $$
> is continuous. Its endpoints are $B_k$ and $B_{k+1}$. These points lie in the same path component, contradicting the choice of the sequence. Thus $G$ has finitely many components.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- **Source status:** The statement begins on printed p. 74 / PDF p. 86 and its printed hint continues on printed p. 75 / PDF p. 87. Both pages were checked at 200 dpi. The solution is an independent derivation using the indicated compactness argument and the named local theorem.
- **Printed hint:** The phrase “extract a convergent subsequence and $B_k=A_{j_k}$” is read as an instruction to name that subsequence $B_k=A_{j_k}$.
- **Concrete verification:** The compact group $O(1)=\{1,-1\}$ has two path components. A continuous path in this group is constant because its domain is connected and the two points form a discrete space.
- **Routing:** The proof uses sequential compactness in finite-dimensional matrix topology and a local exponential chart.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
