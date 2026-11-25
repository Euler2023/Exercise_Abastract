---
title: "Exercise LA682: A Convergent Matrix Logarithm Outside the Lie Algebra"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 7, printed p. 74, PDF p. 86"
source_refs:
  - "S10/ch-3/sec-9/ex-7"
created: 2026-11-25
---

# Exercise LA682: A Convergent Matrix Logarithm Outside the Lie Algebra

## Problem Statement

> [!question] Original Chapter 3, Exercise 7
> Suppose $G\subset\operatorname{GL}(n;\mathbb C)$ is a matrix Lie group with Lie algebra $\mathfrak g$. Suppose that $A$ is in $G$ and that $\|A-I\|<1$, so that the power series for $\log A$ is convergent. Is it necessarily the case that $\log A$ is in $\mathfrak g$? Prove or give a counterexample.

## Hints

> [!hint]- Hint 1
> A finite matrix Lie group has zero Lie algebra. Look for a nonidentity element in a finite subgroup of $\mathbb C^\times$ close to $1$.

> [!hint]- Hint 2
> Use a twelfth root of unity. To show its series logarithm is nonzero, apply $e^{\log A}=A$ in the stated norm ball.

## Solution

> [!success]- Solution
> **Proof scope:** Independent counterexample using Hall's local inverse identity for the ambient matrix logarithm [S10, §2.3, Theorem 2.8, printed p. 38, PDF p. 50].
>
> Let $G=\mu_{12}=\{z\in\mathbb C:z^{12}=1\}$ in $\operatorname{GL}(1;\mathbb C)$. It is a finite closed subgroup. If $X\in\mathfrak g$, the continuous map $t\mapsto e^{tX}$ sends the connected space $\mathbb R$ into the finite set $G$, so it is constant. Its value at $t=0$ is $1$, and its derivative there is $X$. Thus $X=0$ and $\mathfrak g=\{0\}$.
>
> Take $A=e^{\pi i/6}=(\sqrt3+i)/2$. Then $A^{12}=1$ and $A\ne1$. For $1\times1$ matrices the Hilbert–Schmidt norm is absolute value. We have
> $$
> \|A-1\|^2
> =\left(\frac{\sqrt3}{2}-1\right)^2+\frac14
> =2-\sqrt3<1.
> $$
> Theorem 2.8 gives convergence of the series and $e^{\log A}=A$. Since $A\ne1$, we must have $\log A\ne0$. Hence $\log A\notin\mathfrak g$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Logarithms|Matrix Logarithms]]
- [[04 - Linear Algebra and Modules/Concepts/Hilbert-Schmidt Norm|Hilbert–Schmidt Norm]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** The exercise was checked against the 200 dpi rendering of printed p. 74 / PDF p. 86. The inverse identity and the group-specific local theorem were checked at printed pp. 38 and 68 / PDF pp. 50 and 80.
- **Local membership:** For each fixed matrix Lie group $G$, Theorem 3.42 provides a sufficiently small exponential neighborhood $V_\epsilon=\exp\{X:\|X\|<\epsilon\}$ on which membership in $G$ implies membership of the logarithm in $\mathfrak g$. Here $0<\epsilon<\log 2$ is chosen for the group. [S10, §3.7, printed p. 68, PDF p. 80]
- **Routing:** The proof uses a scalar matrix norm and the local exponential–logarithm identity.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
