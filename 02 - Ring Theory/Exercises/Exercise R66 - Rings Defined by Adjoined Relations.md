---
title: "Exercise R66: Rings Defined by Adjoined Relations"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - quotient-rings
  - adjoining-elements
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §5, Ex. 5.4, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R66: Rings Defined by Adjoined Relations

## Problem Statement

> [!question] Exercise 5.4
> Determine the structure of the ring $R'$ obtained from $\mathbb Z$ by adjoining $\alpha$ satisfying:
>
> **(a)** $2\alpha=6$, $6\alpha=15$;
>
> **(b)** $2\alpha-6=0$, $\alpha-10=0$;
>
> **(c)** $\alpha^3+\alpha^2+1=0$, $\alpha^2+\alpha=0$.

## Hints

> [!hint]- Hint 1
> Combine the relations until an ordinary integer, or even $1$, lies in the defining ideal.

## Solution

> [!success]- Solution
> **(a)** Multiplying $2\alpha=6$ by $3$ gives $6\alpha=18$. Comparing with $6\alpha=15$ yields $3=0$. Then $2$ is invertible and $2\alpha=0$ gives $\alpha=0$. Thus $R'\cong\mathbb F_3$.
>
> **(b)** The relation $\alpha=10$ reduces $2\alpha-6$ to $14$. Hence $R'\cong\mathbb Z/14\mathbb Z$, with $\alpha$ represented by $10$.
>
> **(c)** Since $\alpha(\alpha^2+\alpha)=\alpha^3+\alpha^2=0$, the first relation gives $1=0$. Thus $R'$ is the zero ring.

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Source status:** The statement is from [S1, Ch. 11, §5, Ex. 5.4, printed p. 356, PDF p. 368]. The eliminations are independent.

