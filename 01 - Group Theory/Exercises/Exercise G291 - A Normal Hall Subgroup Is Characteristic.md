---
title: "Exercise G291: A Normal Hall Subgroup Is Characteristic"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - hall-subgroups
  - characteristic-subgroups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 14, printed p. 76, PDF p. 91"
created: 2026-08-28
---

# Exercise G291: A Normal Hall Subgroup Is Characteristic

## Problem Statement

> [!question] Exercise 14
> Let $G$ be finite and let $N\trianglelefteq G$ such that $|N|$ and $|G/N|$ are relatively prime.
>
> **(a)** If $H\le G$ has the same order as $G/N$, prove that $G=HN$.
>
> **(b)** If $\alpha$ is an automorphism of $G$, prove that $\alpha(N)=N$.

## Hints

> [!hint]- Hint 1
> In (a), first show $H\cap N=\{e\}$.

> [!hint]- Hint 2
> In (b), compare the two normal subgroups $N$ and $\alpha(N)$ using the cardinality of their product.

## Solution

> [!success]- Solution
> Put $m=|N|$ and $n=|G/N|$, so $|G|=mn$ and $\gcd(m,n)=1$.
>
> **(a)** The order of $H\cap N$ divides both $|H|=n$ and $|N|=m$, hence $H\cap N=\{e\}$. Since $N$ is normal, $HN$ is a subgroup and
>
> $$
> |HN|=\frac{|H||N|}{|H\cap N|}=nm=|G|.
> $$
>
> Therefore $HN=G$.
>
> **(b)** Put $N'=\alpha(N)$. It is normal and has order $m$. Thus $NN'$ is a subgroup and
>
> $$
> |NN'|=\frac{m^2}{|N\cap N'|}
> $$
>
> divides $mn$. Consequently
>
> $$
> \frac{m}{|N\cap N'|}\mid n.
> $$
>
> The same integer divides $m$, so coprimality forces it to be $1$. Hence $|N\cap N'|=m$, giving $N=N'=\alpha(N)$. Thus $N$ is characteristic.

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Terminology:** Such an $N$ is a normal Hall subgroup.
- **Source status:** [S2, Ch. I, Ex. 14, printed p. 76, PDF p. 91]. The order argument is independent.
