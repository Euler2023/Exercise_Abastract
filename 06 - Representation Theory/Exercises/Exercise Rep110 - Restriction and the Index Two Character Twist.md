---
title: "Exercise Rep110: Restriction and the Index Two Character Twist"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.10, printed pp. 321–322, PDF pp. 333–334"
created: 2026-08-27
---

# Exercise Rep110: Restriction and the Index Two Character Twist

## Problem Statement

> [!question] Miscellaneous Exercise M.10
> Let $H$ have index $2$ in $G$, let $R$ be a representation of $G$, and define $R'_g=R_g$ for $g\in H$ and $R'_g=-R_g$ otherwise. **(a)** Show $R'\cong R$ iff the character of $R$ is zero on the nontrivial coset. **(b)** Use Frobenius reciprocity to show $\operatorname{ind}(\operatorname{res}R)\cong R\oplus R'$. **(c)** If $R$ is irreducible, show that $R\not\cong R'$ implies $\operatorname{res}R$ is irreducible, while $R\cong R'$ implies the restriction is a sum of two irreducible representations of $H$.

## Hints

> [!hint]- Hint 1
> Write $R'=R\otimes\varepsilon$, where $\varepsilon$ is the quotient sign character.

## Solution

> [!success]- Solution
> The characters satisfy $\chi_{R'}=\chi_R$ on $H$ and $\chi_{R'}=-\chi_R$ outside. Thus they are equal exactly when $\chi_R$ vanishes outside $H$, proving (a).
>
> The induced character of $\operatorname{res}R$ equals $2\chi_R$ on $H$ and $0$ outside, exactly $\chi_R+\chi_{R'}$; semisimplicity gives (b). For irreducible $R$, Frobenius reciprocity yields
>
> $$
> (\operatorname{res}R,\operatorname{res}R)_H
> =(R,\operatorname{ind}\operatorname{res}R)_G
> =1+(R,R')_G.
> $$
>
> The norm is $1$ when $R\not\cong R'$, so the restriction is irreducible. Otherwise it is $2$, and Clifford's index-two argument gives two distinct irreducible summands. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induced Representations and Frobenius Reciprocity]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- The statement crosses [S1, Ch. 10, Misc. Ex. M.10, printed pp. 321–322, PDF pp. 333–334].

