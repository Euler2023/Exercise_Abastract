---
title: "Exercise LA605: Adapted Bases and Elliptic Integral Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.7, Exercise 3.7.3, printed p. 97, PDF p. 111"
source_refs:
  - "S7/ch-3/sec-7/ex-3"
created: 2026-10-28
---

# Exercise LA605: Adapted Bases and Elliptic Integral Matrices

## Problem Statement

> [!question] Original Exercise 3.7.3
> (a) In the context of mapping an ideal $J$ of $A$ such that $A/J\cong\mathbb Z/N\mathbb Z$ back to a matrix conjugacy class, retain the notation $(u,v)$ for a $\mathbb Z$-basis of $A$ such that $(u,Nv)$ is a $\mathbb Z$-basis of $J$. Show that the matrix $\gamma_J\in M_2(\mathbb Z)$ such that $\mu_6(u,v)=(u,v)\gamma_J$ lies in $\operatorname{SL}_2(\mathbb Z)$.
>
> (b) For any $\alpha\in\Gamma_0^\pm(N)$ consider the $\mathbb Z$-basis $(u',v')=(u,v)\alpha$ of $A$. Show that $(u',Nv')$ is again a $\mathbb Z$-basis of $J$.
>
> (c) Show that any two such $\mathbb Z$-bases $(u,v)$ and $(u',v')$ of $A$ satisfy $(u',v')=(u,v)\alpha$ for some $\alpha\in\Gamma_0^\pm(N)$.
>
> Here $A=\mathbb Z[\mu_6]$, $\mu_6^2-\mu_6+1=0$.

## Hints

> [!hint]- Hint 1
> The determinant of multiplication by $\mu_6$ is its norm, one.

> [!hint]- Hint 2
> Conjugate the basis-change matrix by $\operatorname{diag}(1,N)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** On $A\otimes\mathbb Q=\mathbb Q(\mu_6)$, multiplication by $\mu_6$ has minimal and characteristic polynomial $X^2-X+1$: it is not rational and the vector-space dimension is two. Its determinant is the constant term one. The matrix in an integral basis has integer entries, so $\gamma_J\in\operatorname{SL}_2(\mathbb Z)$. Also it has order six. If $\gamma_J=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, then $\mu_6u=au+cv\in J$, forcing $N\mid c$; thus it actually belongs to $\Gamma_0(N)$.
>
> **(b)** Let $D_N=\operatorname{diag}(1,N)$ and $\alpha=\begin{pmatrix}a&b\\Nc&d\end{pmatrix}$. The two ordered bases of $J$ are related by
> $$
> (u',Nv')=(u,v)\alpha D_N=(u,Nv)D_N^{-1}\alpha D_N,
> \qquad D_N^{-1}\alpha D_N=\begin{pmatrix}a&Nb\\c&d\end{pmatrix}.
> $$
> This last matrix is integral with determinant $\pm1$, so the new pair is a basis of the same lattice $J$.
>
> **(c)** Since both pairs are bases of $A$, there is a unique $\alpha=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\operatorname{GL}_2(\mathbb Z)$ relating them. Since their $D_N$-modified pairs are bases of $J$, $D_N^{-1}\alpha D_N$ is integral unimodular. Its lower-left entry is $c/N$, hence $N\mid c$. This is precisely $\alpha\in\Gamma_0^\pm(N)$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 97 / PDF 111. The solution above is independently derived.
- **Routing:** The principal toolkit is linear-algebra; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
