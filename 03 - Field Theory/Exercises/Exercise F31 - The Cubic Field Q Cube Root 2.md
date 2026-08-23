---
title: "Exercise F31: The Cubic Field $\\mathbb Q(\\sqrt[3]{2})$"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - field-extensions
  - minimal-polynomials
  - cubic-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Miscellaneous Problems, Ex. M.5, printed p. 101, PDF p. 113"
created: 2026-08-23
---

# Exercise F31: The Cubic Field $\mathbb Q(\sqrt[3]{2})$

## Problem Statement

> [!question] Exercise M.5
> Let $\alpha=\sqrt[3]{2}\in\mathbb R$.
> 
> **(a)** Prove that $(1,\alpha,\alpha^2)$ is independent over $\mathbb Q$.
> 
> **(b)** Prove that the real numbers $a+b\alpha+c\alpha^2$, with $a,b,c\in\mathbb Q$, form a field.

## Hints

> [!hint]- Hint 1
> The polynomial $x^3-2$ is irreducible over $\mathbb Q$.

> [!hint]- Hint 2
> For inverses, view multiplication by a nonzero element as a linear map on a three-dimensional space.

## Solution

> [!success]- Solution
> The polynomial $x^3-2$ is irreducible over $\mathbb Q$ by Eisenstein's criterion at $2$. Therefore the minimal polynomial of $\alpha$ has degree $3$, so no nonzero polynomial of degree at most $2$ can vanish at $\alpha$. This proves the independence of $1,\alpha,\alpha^2$.
> 
> Let
> 
> $$
> K=\{a+b\alpha+c\alpha^2:a,b,c\in\mathbb Q\}.
> $$
> 
> It is closed under addition, negation, and multiplication, because every power $\alpha^j$ reduces using $\alpha^3=2$. For nonzero $u\in K$, multiplication $m_u:K\to K$ is an injective $\mathbb Q$-linear map: $uv=0$ in $\mathbb R$ implies $v=0$. Since $K$ has dimension $3$, $m_u$ is surjective, so some $v\in K$ satisfies $uv=1$. Hence every nonzero element has an inverse and $K$ is a field.

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, Misc. Problems, Ex. M.5, printed p. 101, PDF p. 113]. The solution is an independent derivation for this vault, not a solution printed in Artin.
