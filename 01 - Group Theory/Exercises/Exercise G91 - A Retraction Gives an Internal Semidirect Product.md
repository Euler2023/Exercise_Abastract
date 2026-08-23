---
title: "Exercise G91: A Retraction Gives an Internal Semidirect Product"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - homomorphisms
  - kernels
  - semidirect-products
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 11, Ex. 11.7, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G91: A Retraction Gives an Internal Semidirect Product

## Problem Statement

> [!question] Exercise 11.7
> Let $H\le G$ and let $\varphi:G\to H$ restrict to the identity on $H$. If $N=\ker\varphi$, what can be said about the product map $H\times N\to G$?

## Hints

> [!hint]- Hint 1
> Write $g=\varphi(g)[\varphi(g)^{-1}g]$.

## Solution

> [!success]- Solution
> For every $g\in G$,
> 
> $$
> g=\varphi(g)\bigl(\varphi(g)^{-1}g\bigr),
> $$
> 
> and the second factor lies in $N$. Thus $HN=G$. Also $H\cap N=1$ because $\varphi$ is the identity on $H$. Proposition 2.11.4 therefore makes the product map $H\times N\to G$ bijective.
> 
> Since $N$ is normal, this describes $G$ as an internal semidirect product $N\rtimes H$. The product map from the ordinary direct product is a homomorphism only in the additional case that $H$ centralizes $N$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §11, Ex. 11.7, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
