---
title: "Exercise LA657: Paths and Determinants in the Compact Symplectic Group"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 7, printed p. 27, PDF p. 39"
source_refs:
  - "S10/ch-1/sec-6/ex-7"
created: 2026-11-12
---

# Exercise LA657: Paths and Determinants in the Compact Symplectic Group

## Problem Statement

> [!question] Original Chapter 1, Exercise 7
> Using Theorem 1.6, show that $Sp(n)$ is connected and that every element of $Sp(n)$ has determinant 1.

## Hints

> [!hint]- Hint 1
> Keep the eigenbasis fixed and replace each eigenangle $\theta_j$ by $t\theta_j$.

> [!hint]- Hint 2
> The eigenvalues occur in reciprocal pairs.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **Named source input:** The forward direction of Hall's Theorem 1.6 gives, for each $U\in Sp(n)$, an orthonormal basis $u_1,\ldots,u_n,v_1,\ldots,v_n$ with $Ju_j=v_j$, $\omega(u_j,v_k)=\delta_{jk}$, zero same-type pairings, and eigenvalues $e^{i\theta_j}$ on $u_j$ and $e^{-i\theta_j}$ on $v_j$. Hall proves this forward direction on printed pp. 15–16 / PDF pp. 27–28; the converse is proved in Exercise LA656.
>
> Let $Q$ have this basis as columns. Set, for $0\le t\le1$,
> $$
> D(t)=\operatorname{diag}(e^{it\theta_1},\ldots,e^{it\theta_n},
> e^{-it\theta_1},\ldots,e^{-it\theta_n}),\qquad U(t)=QD(t)Q^{-1}.
> $$
> The eigenbasis conditions remain valid for $U(t)$: unitarity follows from the modulus-one eigenvalues, and each nonzero mixed pairing is multiplied by $e^{it\theta_j}e^{-it\theta_j}=1$. Thus $U(t)\in Sp(n)$ by the converse criterion. The entries vary continuously, $U(0)=I$, and $U(1)=U$. Every element can therefore be connected to $I$ by a path. Concatenating a reversed path from one element to $I$ with a path from $I$ to another proves path connectedness, hence connectedness.
>
> The determinant is computed directly from the diagonal form:
> $$
> \det U=\det D(1)=\prod_{j=1}^{n}e^{i\theta_j}e^{-i\theta_j}=1.
> $$
> No continuous choice of eigenbasis as $U$ varies is required; the basis is fixed for each individual path. For $n=1$, this path is the familiar diagonal path in $SU(2)$ conjugated by a fixed unitary matrix.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Path Connectedness and Path Components|Path Connectedness and Path Components]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The complete numbered exercise and printed hints were checked on the original 200 dpi page image. The solution is independently supplied; the exercise statement is not a source-written proof.
- **Method boundary:** Theorem 1.6 is used as the exercise explicitly requests. The conclusion concerns compact $Sp(n)$; the noncompact real group $Sp(n;\mathbb R)$ requires a different connectedness argument.
- **Related exercise:** [[04 - Linear Algebra and Modules/Exercises/Exercise LA656 - The Converse Symplectic Eigenbasis Criterion|Exercise LA656]].
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
