---
title: "Exercise F51: Two Membership Tests in Pure Radical Fields"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - radical-extensions
  - field-membership
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 3, The Degree of a Field Extension, Ex. 3.7, printed p. 473, PDF p. 485"
created: 2026-08-28
---

# Exercise F51: Two Membership Tests in Pure Radical Fields

## Problem Statement

> [!question] Exercise 3.7
> **(a)** Is $i$ in the field $\mathbb Q(\sqrt[4]{-2})$? **(b)** Is $\sqrt[3]{5}$ in the field $\mathbb Q(\sqrt[3]{2})$?

## Hints

> [!hint]- Hint 1
> For (a), assuming $i$ is present would also put $\sqrt2$ in the quartic field.
>
> [!hint]- Hint 2
> For (b), apply the embedding $\sqrt[3]2\mapsto\omega\sqrt[3]2$ and compare coefficients over $\mathbb Q(\omega)$.

## Solution

> [!success]- Solution
> **(a) No.** Let $\alpha^4=-2$ and $K=\mathbb Q(\alpha)$. Eisenstein at $2$ gives $[K:\mathbb Q]=4$. If $i\in K$, then $\alpha^2=\pm i\sqrt2$ implies $\sqrt2\in K$, so the degree-four field $L=\mathbb Q(i,\sqrt2)$ would equal $K$.
>
> But if $\alpha\in L$, then $\alpha^2=\pm i\sqrt2$. Taking the norm from $L$ to $\mathbb Q(i)$ gives
>
> $$
> N_{L/\mathbb Q(i)}(\alpha)^2=N_{L/\mathbb Q(i)}(\pm i\sqrt2)=2.
> $$
>
> This would make $2$ a square in $\mathbb Q(i)$. Writing a putative square root as $r+si$ with $r,s\in\mathbb Q$ shows immediately that this is impossible. Hence $i\notin K$.
>
> **(b) No.** Put $u=\sqrt[3]2$, $v=\sqrt[3]5$, and suppose $v=a+bu+cu^2$ with $a,b,c\in\mathbb Q$. Let $\omega=e^{2\pi i/3}$ and apply the embedding $\sigma:u\mapsto\omega u$. Since $\sigma(v)^3=5$, one has $\sigma(v)\in\{v,\omega v,\omega^2v\}$.
>
> Comparing coefficients of $1,u,u^2$ over $\mathbb Q(\omega)$ gives, respectively:
>
> - if $\sigma(v)=v$, then $b=c=0$, making $v$ rational;
> - if $\sigma(v)=\omega v$, then $a=c=0$ and $v=bu$, so $b^3=5/2$;
> - if $\sigma(v)=\omega^2v$, then $a=b=0$ and $v=cu^2$, so $c^3=5/4$.
>
> None of $5$, $5/2$, and $5/4$ has the required rational cube root. Thus $\sqrt[3]5\notin\mathbb Q(\sqrt[3]2)$.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]

## Notes

- **Routing:** Field Theory is primary because both questions are membership tests in simple radical extensions.
- **Source status:** [S1, Ch. 15, §15.3, Ex. 3.7, printed p. 473, PDF p. 485]. Both negative answers and proofs are independent.
