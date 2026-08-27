---
title: "Exercise Rep62: Character Table of the Frobenius Group of Order Twenty"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 4, Ex. 4.5, printed p. 316, PDF p. 328"
created: 2026-08-27
---

# Exercise Rep62: Character Table of the Frobenius Group of Order Twenty

## Problem Statement

> [!question] Exercise 4.5
> Let $G=\langle x,y\mid x^5=1,\ y^4=1,\ yxy^{-1}=x^2\rangle$. Determine the character table of $G$.

## Hints

> [!hint]- Hint 1
> The quotient by $\langle x\rangle$ supplies four linear characters.

> [!hint]- Hint 2
> Induce any nontrivial character of $C_5$.

## Solution

> [!success]- Solution
> The classes have representatives $1,x,y,y^2,y^3$ and sizes $1,4,5,5,5$. The quotient $G/\langle x\rangle\cong C_4$ gives four linear characters. Let $i=e^{\pi i/2}$ and let $\lambda_j(y)=i^j$, $\lambda_j(x)=1$. The nontrivial characters of $C_5$ form one orbit under conjugation, so their induction is a single irreducible character $\psi$ of degree $4$, with $\psi(x)=-1$ and $\psi(y^k)=0$ for $k\ne0$. Thus
>
> $$
> \begin{array}{c|rrrrr}
> &1&x&y&y^2&y^3\\\hline
> \lambda_0&1&1&1&1&1\\
> \lambda_1&1&1&i&-1&-i\\
> \lambda_2&1&1&-1&1&-1\\
> \lambda_3&1&1&-i&-1&i\\
> \psi&4&-1&0&0&0
> \end{array}.
> $$
>
> Weighted row norms are $1$, and $4\cdot1^2+4^2=20$, so the table is complete. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]

## Notes

- **Source status:** [S1, Ch. 10, §4, Ex. 4.5, printed p. 316, PDF p. 328]; the induced-character computation is independent.

