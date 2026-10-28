---
title: "Exercise F142: Constant Fields and Absolute Irreducibility"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.2, Exercise 7.2.10, printed p. 271, PDF p. 284"
source_refs:
  - "S7/ch-7/sec-2/ex-10"
created: 2026-10-28
---

# Exercise F142: Constant Fields and Absolute Irreducibility

## Problem Statement

> [!question] Original Exercise 7.2.10
> Working inside a fixed algebraic closure of $k(t)$, let $K=k(t,u)$ be a field as in Theorem 7.2.5, and let $f\in k(t)[y]$ be the minimal polynomial of $u$. After clearing denominators, $f(u)=0$ becomes $\varphi(t,u)=0$ with $\varphi\in k[x,y]$. The text asserts that $\varphi$ is irreducible over $\bar k$ because $K\cap\bar k=k$.
>
> Supply details as necessary for the following argument. If $\varphi=\varphi_1\varphi_2$ over $\bar k$, the factorization is defined over a finite extension $k(v)$, where $g(v)=0$ and $g\in k[z]$ is irreducible. The polynomial $g$ stays irreducible over $k(t)$, since its roots are algebraic constants. Put $l=k(t,v)$. Then $[K:k(t)]=\deg f$, $[l:k(t)]=\deg g$, and the factorization forces $[Kl:l]<\deg f$. Consequently $[Kl:K]<\deg g$ and $g$ factors in $K[z]$. Since its roots are in $\bar k$, this factorization is in $(K\cap\bar k)[z]=k[z]$, a contradiction.

> [!warning] Source issue
> Clearing denominators must be followed by removing content. An arbitrary polynomial multiple need not be irreducible: for $K=k(t,u)$ with $u=t$, the minimal equation is $y-t$, but $t(y-t)$ is another cleared relation and is reducible. The intended assertion concerns the primitive irreducible relation.

## Hints

> [!hint]- Hint 1
> Remove polynomial content when clearing denominators.

> [!hint]- Hint 2
> Compare $[Kl:k(t)]$ in the two tower directions, then inspect coefficients of a monic factor of $g$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> First take the primitive polynomial associated to $f$ in $k[t][y]$. Gauss's lemma makes it irreducible there. Suppose it factors nontrivially over $\bar k[t,y]$. Both factors have positive $y$-degree: a factor depending on $t$ alone would divide all coefficients, contradicting primitivity. Primitivity persists over $\bar k[t]$, since any common algebraic root of the coefficients would have a minimal polynomial over $k$ dividing all of them.
>
> There are finitely many algebraic coefficients in the factorization. Characteristic zero and the primitive element theorem place them in a finite simple extension $k(v)/k$; let $g$ be the monic minimal polynomial of $v$ of degree $m$. The polynomial $g$ remains irreducible over $k(t)$. Indeed a monic factor over $k(t)$ has coefficients that are symmetric polynomials in algebraic roots, hence belong to $\bar k\cap k(t)=k$. A nonconstant rational function of a transcendental variable is transcendental over $k$, which proves that last intersection.
>
> Set $d=\deg f$ and $l=k(t,v)$. The factorization of the primitive polynomial gives a nontrivial factorization of $f$ in $l[y]$. Hence the minimal polynomial of $u$ over $l$ has degree less than $d$:
> $$
> [Kl:k(t)]=[Kl:l][l:k(t)]<dm.
> $$
> Dividing by $[K:k(t)]=d$ gives $[K(v):K]<m$, so $g$ has a proper monic factor over $K$. Each coefficient of such a factor belongs to $\bar k$, because all roots of $g$ are in $\bar k$. It therefore belongs to $K\cap\bar k=k$. This contradicts irreducibility of $g$ over $k$.
>
> Thus the primitive $\varphi$ is absolutely irreducible. The argument uses only finite extension degrees, Gauss's lemma, and the characteristic-zero primitive element theorem, with the hypotheses checked above.

## Related Concepts

- [[03 - Field Theory/Concepts/Function Fields|Function Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 271 / PDF p. 284. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
