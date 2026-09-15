---
title: "Exercise R258: Incomparability of Prime Ideals in Integral Extensions"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - integral-extensions
  - prime-ideals
  - cohen-seidenberg
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VII, Extensions of Rings, Exercise 9, printed p. 354, PDF p. 369"
created: 2026-09-15
---

# Exercise R258: Incomparability of Prime Ideals in Integral Extensions

## Problem Statement

> [!question] Lang, Chapter VII, Exercise 9
> Let $A$ be an entire ring, integrally closed. Let $B$ be entire, integral over $A$. Let $Q_1, Q_2$ be prime ideals of $B$ with $Q_1 \supset Q_2$ but $Q_1 \ne Q_2$. Let $P_i = Q_i \cap A$. Show that $P_1 \ne P_2$.

## Hints

> [!hint]- Hint 1: Assume $P_1 = P_2 = P$ and pass to the quotient
> Consider the quotient domain $\bar{B} = B/Q_2$. Since $Q_2 \cap A = P$, the quotient ring $\bar{A} = A/P$ embeds canonically as a subring of $\bar{B}$. What is the integrality relation between $\bar{B}$ and $\bar{A}$?

> [!hint]- Hint 2: Inspect the contraction of the image of $Q_1$
> In $\bar{B}$, the image $\bar{Q}_1 = Q_1/Q_2$ is a non-zero prime ideal. What is its intersection with $\bar{A}$?

> [!hint]- Hint 3: Use an integral equation of minimal degree
> Pick a non-zero element $\bar{y}\in\bar{Q}_1$. Write a monic polynomial equation for $\bar{y}$ over $\bar{A}$ of minimal degree. What happens to the constant term?

## Solution

> [!success]- Complete Derivation
> Let $A$ and $B$ be integral domains (entire rings) with $A\subseteq B$, such that $B$ is an integral extension of $A$.
> 
> Let $Q_1$ and $Q_2$ be prime ideals of $B$ satisfying:
> $$
> Q_2 \subsetneq Q_1.
> $$
> 
> Let $P_1 = Q_1 \cap A$ and $P_2 = Q_2 \cap A$. Since $Q_2\subseteq Q_1$, we have $P_2\subseteq P_1$.
> 
> We must prove that:
> $$
> P_1 \ne P_2,
> $$
> which means $P_2 \subsetneq P_1$.
> 
> ### Proof by Contradiction
> Suppose for contradiction that:
> $$
> P_1 = P_2 = P.
> $$
> 
> #### Step 1: Quotienting by $Q_2$
> Form the quotient ring:
> $$
> \bar{B} = B / Q_2.
> $$
> Since $Q_2$ is a prime ideal of the integral domain $B$, $\bar{B}$ is an integral domain.
> 
> The natural quotient map $\pi: B \to \bar{B}$ restricts to $A$ with kernel:
> $$
> \ker(\pi|_A) = Q_2 \cap A = P_2 = P.
> $$
> Thus the image of $A$ in $\bar{B}$ is isomorphic to:
> $$
> \bar{A} = A / P.
> $$
> 
> We identify $\bar{A}$ with its canonical image in $\bar{B}$, so that $\bar{A}$ is a subring of $\bar{B}$.
> 
> Because $B$ is integral over $A$, the quotient $\bar{B}$ is an **integral extension** of $\bar{A}$: for any $\bar{b} = b + Q_2 \in \bar{B}$, an integral relation $b^n + a_{n-1}b^{n-1}+\cdots+a_0 = 0$ ($a_i\in A$) projects modulo $Q_2$ to:
> $$
> \bar{b}^n + \bar{a}_{n-1}\bar{b}^{n-1} + \cdots + \bar{a}_0 = 0,\qquad \bar{a}_i = a_i + P \in \bar{A}.
> $$
> 
> #### Step 2: The non-zero prime $\bar{Q}_1$ and its contraction
> In $\bar{B}$, consider the ideal:
> $$
> \bar{Q}_1 = \pi(Q_1) = Q_1 / Q_2.
> $$
> - Since $Q_1$ is a prime ideal containing $Q_2$, $\bar{Q}_1$ is a prime ideal of $\bar{B}$.
> - Since $Q_2 \subsetneq Q_1$, there exists an element $x\in Q_1 \setminus Q_2$, so $\bar{x} = \pi(x) \ne 0$. Thus:
>   $$
>   \bar{Q}_1 \ne (0).
>   $$
> 
> Now examine the contraction of $\bar{Q}_1$ to $\bar{A}$:
> $$
> \bar{Q}_1 \cap \bar{A} = (Q_1 / Q_2) \cap (A / P) = (Q_1 \cap A) / P = P_1 / P = P / P = (0).
> $$
> 
> Thus $\bar{Q}_1$ is a **non-zero prime ideal** of $\bar{B}$ whose intersection with $\bar{A}$ is the zero ideal $(0)$.
> 
> #### Step 3: Minimal integral polynomial contradiction
> Choose any non-zero element:
> $$
> 0 \ne \bar{y} \in \bar{Q}_1.
> $$
> 
> Since $\bar{B}$ is integral over $\bar{A}$, $\bar{y}$ satisfies a monic polynomial relation with coefficients in $\bar{A}$.
> Choose such a monic polynomial of **minimal degree** $m \ge 1$:
> $$
> \bar{y}^m + \bar{c}_{m-1} \bar{y}^{m-1} + \cdots + \bar{c}_1 \bar{y} + \bar{c}_0 = 0,\qquad \bar{c}_i \in \bar{A}.
> $$
> 
> **Claim:** $\bar{c}_0 \ne 0$.
> - If $\bar{c}_0 = 0$, then:
>   $$
>   \bar{y} \left(\bar{y}^{m-1} + \bar{c}_{m-1} \bar{y}^{m-2} + \cdots + \bar{c}_1\right) = 0.
>   $$
>   Since $\bar{B}$ is an integral domain and $\bar{y} \ne 0$, this implies:
>   $$
>   \bar{y}^{m-1} + \bar{c}_{m-1} \bar{y}^{m-2} + \cdots + \bar{c}_1 = 0,
>   $$
>   which is a monic integral relation for $\bar{y}$ over $\bar{A}$ of degree $m-1 < m$, contradicting the minimality of $m$.
> - Hence $\bar{c}_0 \ne 0$.
> 
> On the other hand, rewrite the minimal equation as:
> $$
> \bar{c}_0 = -\bar{y} \left(\bar{y}^{m-1} + \bar{c}_{m-1} \bar{y}^{m-2} + \cdots + \bar{c}_1\right).
> $$
> 
> Because $\bar{y}\in\bar{Q}_1$ and $\bar{Q}_1$ is an ideal of $\bar{B}$, the right-hand side belongs to $\bar{Q}_1$.
> Since $\bar{c}_0 \in \bar{A}$, this proves:
> $$
> \bar{c}_0 \in \bar{Q}_1 \cap \bar{A}.
> $$
> 
> But from Step 2, $\bar{Q}_1 \cap \bar{A} = (0)$. Therefore:
> $$
> \bar{c}_0 = 0.
> $$
> 
> This contradicts $\bar{c}_0 \ne 0$.
> 
> We conclude that our assumption $P_1 = P_2$ was false.
> Therefore:
> $$
> P_1 \ne P_2.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **The Incomparability Theorem:** This result is the **Incomparability Theorem** of Cohen and Seidenberg (1946). Together with the **Lying-Over Theorem** and the **Going-Up Theorem**, it establishes the fundamental topological behavior of the spectrum map $\operatorname{Spec}(B) \to \operatorname{Spec}(A)$ for integral extensions:
  - fibers over any prime $\mathfrak p$ contain no inclusion relations (incomparability);
  - primes lying above maximal ideals are maximal, and primes lying above minimal primes in domains are minimal.
- **Generality of the Result:** Although the exercise statement includes the hypothesis that $A$ is integrally closed, the proof above shows that incomparability holds for **any** integral extension of commutative rings $A\subseteq B$.
- **Independent Derivation:** The quotient reduction and minimal-degree polynomial argument is independently derived above.
