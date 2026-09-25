---
title: "Exercise G329: Lifting Full SL2 Modulo Prime Powers"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - matrix-groups
  - congruence-subgroups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercise 22, printed p. 547, PDF p. 562"
created: 2026-09-26
---

# Exercise G329: Lifting Full SL2 Modulo Prime Powers

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 22
> Let $p$ be a prime $\ge5$. Let $G$ be a subgroup of $SL_2(\mathbb Z/p^n\mathbb Z)$ with $n\ge1$. Assume that the image of $G$ in $SL_2(\mathbb Z/p\mathbb Z)$ under the natural homomorphism is all of $SL_2(\mathbb Z/p\mathbb Z)$. Prove that $G=SL_2(\mathbb Z/p^n\mathbb Z)$.
>
> **Printed note (summary).** Lang attributes the result to a generalization by Serre of a result of Shimura and points to Serre, *Abelian $\ell$-adic Representations and Elliptic Curves*, IV, §3, Lemma 3, and Lang, *Elliptic Functions*, Chapter 17, §4.

## Hints

> [!hint]- Hint 1
> Let $K_i$ be the kernel of reduction from $SL_2(\mathbb Z/p^n\mathbb Z)$ modulo $p^i$. The quotient $K_i/K_{i+1}$ is the additive group $\mathfrak{sl}_2(\mathbb F_p)$.

> [!hint]- Hint 2
> Lift $U=I+E_{12}$ from the full image of $G$ modulo $p$. Its $p$-th power gives the class $E_{12}$ in $K_1/K_2$ when $p\ge5$.

> [!hint]- Hint 3
> Conjugate this class by lifts of $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ and $I+E_{21}$ to span $\mathfrak{sl}_2(\mathbb F_p)$; then use $p$-th powers to pass from one congruence layer to the next.

## Solution

> [!success]- Independently derived congruence-filtration proof
> Write $R_n=\mathbb Z/p^n\mathbb Z$. If $n=1$, the claim is its hypothesis. Suppose $n\ge2$. For $1\le i\le n$ let
>
> $$
> K_i=\ker\bigl(SL_2(R_n)\longrightarrow SL_2(\mathbb Z/p^i\mathbb Z)\bigr),
> $$
>
> with $K_n=\{I\}$. For $i<n$, each class in $K_i/K_{i+1}$ is represented by $I+p^iX$, and
>
> $$
> \det(I+p^iX)\equiv1+p^i\operatorname{tr}X\pmod{p^{i+1}}.
> $$
>
> Hence $X\bmod p$ is traceless. Conversely each traceless class occurs: the reduction maps between the $SL_2$ levels are surjective, as proved in [[04 - Linear Algebra and Modules/Exercises/Exercise LA408 - Order of SL2 Modulo an Integer|Exercise LA408]]. Multiplication of representatives adds their $X$ classes, so
>
> $$
> K_i/K_{i+1}\cong\mathfrak{sl}_2(\mathbb F_p)
> $$
>
> as additive groups. Conjugation by an element reducing to $h\in SL_2(\mathbb F_p)$ acts on this quotient by $X\mapsto hXh^{-1}$.
>
> **First layer.** Put $E=E_{12}$ and $U=I+E$. By the hypothesis, choose $g\in G$ reducing to $U$ modulo $p$; write $g=U+pX$. Expanding a product with one occurrence of $pX$ and reducing modulo $p^2$ gives
>
> $$
> g^p\equiv U^p+p\sum_{j=0}^{p-1}U^j XU^{p-1-j}\pmod{p^2}.
> $$
>
> Because $E^2=0$, $U^j=I+jE$. Thus the displayed sum is a linear combination modulo $p$ of $X,EX,XE,EXE$, with coefficients respectively
>
> $$
> \sum_{j=0}^{p-1}1,\qquad
> \sum_{j=0}^{p-1}j,\qquad
> \sum_{j=0}^{p-1}(p-1-j),\qquad
> \sum_{j=0}^{p-1}j(p-1-j).
> $$
>
> All four coefficients vanish modulo $p$ when $p\ge5$: the last uses $\sum j^2=p(p-1)(2p-1)/6$, whose denominator is invertible modulo such a prime. Consequently
>
> $$
> g^p\equiv U^p=I+pE\pmod{p^2}.
> $$
>
> Thus $(G\cap K_1)K_2/K_2$ contains $E$. It is an $\mathbb F_p$-subspace of $K_1/K_2$ and is stable under conjugation by $G$. Since $G$ maps onto $SL_2(\mathbb F_p)$, it contains the entire conjugation orbit of $E$. Put $F=E_{21}$ and $H=E_{11}-E_{22}$. Conjugation by $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ sends $E$ to $-F$, while conjugation by $L=I+F$ sends $E$ to $E-H-F$. These three classes span $\mathfrak{sl}_2(\mathbb F_p)$, so
>
> $$
> (G\cap K_1)K_2=K_1.
> $$
>
> **Higher layers.** Suppose for some $1\le i\le n-2$ that $(G\cap K_i)K_{i+1}=K_i$. For any $X\in\mathfrak{sl}_2(\mathbb F_p)$ choose $h\in G\cap K_i$ with $h\equiv I+p^iX\pmod{p^{i+1}}$. The binomial expansion, using $p\ge5$, gives
>
> $$
> h^p\equiv I+p^{i+1}X\pmod{p^{i+2}}.
> $$
>
> Indeed, every term involving at least two factors of $p^i$ has valuation at least $i+2$ after its binomial coefficient is included. Therefore $(G\cap K_{i+1})K_{i+2}=K_{i+1}$. Induction proves surjectivity on every layer.
>
> Finally, take any $A\in SL_2(R_n)$. Choose $g_0\in G$ with the same reduction modulo $p$. Then $Ag_0^{-1}\in K_1$. Successively choose $g_i\in G\cap K_i$ matching the current error modulo $K_{i+1}$. After the $(n-1)$-st correction the error is in $K_n=\{I\}$, so $A\in G$. Hence $G=SL_2(R_n)$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA408 - Order of SL2 Modulo an Integer|Exercise LA408]]

## Notes

- **Routing:** The main argument controls the normal congruence filtration and conjugation action inside a group, so this note belongs to Group Theory.
- **Source and proof status:** The printed hypotheses are $p\ge5$ and $n\ge1$, visually checked at [S2, Ch. XIII, Ex. 22, printed p. 547, PDF p. 562]. The proof here is independent of the cited Serre and Shimura works; their results are not imported.
- **Boundary of the prime condition:** The first-layer calculation uses divisibility of $\sum_{j=0}^{p-1}j^2$ by $p$, which is valid for all primes $p\ge5$. This is the exact point where the argument uses the printed threshold.
