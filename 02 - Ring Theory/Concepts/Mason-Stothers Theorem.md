---
title: Mason-Stothers Theorem
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-09-06
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, \u00a77, Theorem 7.1, printed pp. 194-195, PDF pp. 209-210; Exercise 13, printed p. 215, PDF p. 230"
source_status: partially-verified
status: not-started
---

# Mason-Stothers Theorem

## Definition

> [!info] Definition
> For a nonzero polynomial $P$ over an algebraically closed field of characteristic zero, let $\operatorname{rad}(P)$ be the product of its distinct monic linear factors. Its degree is the number of distinct roots of $P$.
>
> Mason-Stothers: if $A,B,C$ are nonzero, pairwise coprime polynomials with $A+B=C$, and they are not all constant, then
> $$
> \max(\deg A,\deg B,\deg C)\le\deg\operatorname{rad}(ABC)-1.
> $$

## Intuition

A polynomial can have large degree by repeating a few roots. The equation $A+B=C$ restricts how much repetition three coprime polynomials can simultaneously have. Differentiation removes one copy from each repeated root and produces the degree bound.

## Key Properties

**Independent proof of the usable form.** Let $W=A'B-AB'$. If $W=0$, coprimality gives $A\mid A'$ and $B\mid B'$. Degree comparison forces $A'=B'=0$, so characteristic zero makes both constant, and then $C$ is constant, a contradiction. Thus $W\ne0$.

At a root of $A$ of multiplicity $m$, $W$ is divisible by its $(m-1)$st power; the same holds for roots of $B$. As $C=A+B$, one also has $W=A'C-AC'$, giving the same statement for roots of $C$. The root sets are disjoint by coprimality. Therefore
$$
ABC/\operatorname{rad}(ABC)\mid W.
$$
Taking degrees and using $\deg W\le\deg A+\deg B-1$ gives $\deg C\le\deg\operatorname{rad}(ABC)-1$. Permuting the three terms in the equation (and changing a sign) gives the bounds for $A$ and $B$ too.

Characteristic zero and “not all constant” are essential. For example, in characteristic $p$, $X^p+1=(X+1)^p$ violates the bound. Nonzero constants $1+1=2$ in characteristic zero also violate it unless the nonconstant condition is imposed.

## Examples

> [!example] Examples
> For coprime nonconstant $f,g$ with $h=f^3-g^2\ne0$, the theorem gives $\deg f\le2\deg h-2$. The linked exercise supplies this deduction, a proof allowing common factors, and the general exponents $m,n$.
>
> For $A=X$, $B=1$, $C=X+1$, the maximum degree is $1$ and the radical degree is $2$, giving equality.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Derivations|Polynomial Derivations]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/abc and Generalized Szpiro Conjectures|abc and Generalized Szpiro Conjectures]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Lang proves Theorem 7.1 by logarithmic derivatives [S2, Ch. IV, §7, printed pp. 194-195, PDF pp. 209-210]. Its printed wording omits the nonconstant qualification used by the argument; the exact usable statement above makes it explicit. The derivative proof here is an independent presentation. Davenport's result is stated in the chapter and assigned as Exercise 13, not proved there in full. The source's historical attribution is discussed on printed p. 220 / PDF p. 235; no claim of novelty is made for these proofs.
