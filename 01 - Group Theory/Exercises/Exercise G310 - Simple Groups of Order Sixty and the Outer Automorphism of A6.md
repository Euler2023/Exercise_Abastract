---
title: "Exercise G310: Simple Groups of Order Sixty and the Outer Automorphism of A6"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - simple-groups
  - alternating-groups
  - outer-automorphisms
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 41, printed p. 79, PDF p. 94"
created: 2026-08-28
---

# Exercise G310: Simple Groups of Order Sixty and the Outer Automorphism of A6

## Problem Statement

> [!question] Exercise 41
> Let $H$ be a simple group of order $60$.
>
> (a) Show that conjugation on the set of its Sylow subgroups gives an embedding $H\hookrightarrow A_6$.
>
> (b) Using Exercise 40, show that $H\cong A_5$.
>
> (c) Show that $A_6$ has an automorphism not induced by conjugation in $S_6$.

## Hints

> [!hint]- Hint 1
> Count the Sylow $5$-subgroups. The sign of the resulting degree-six action is a homomorphism from a simple nonabelian group to $C_2$.

## Solution

> [!success]- Solution
> **(a)** Sylow theory gives $n_5\mid12$ and $n_5\equiv1\pmod5$. Simplicity excludes $n_5=1$, so $n_5=6$. Conjugation therefore gives $\rho:H\to S_6$. Its kernel is normal; the action is nontrivial, so simplicity gives $\ker\rho=1$. Moreover $\operatorname{sgn}\circ\rho:H\to C_2$ must be trivial, since a nontrivial map would have a proper normal kernel. Hence $\rho(H)\le A_6$.
>
> **(b)** The embedded subgroup $\rho(H)$ has order $60$ and therefore index $6$ in $A_6$. Exercise 40 supplies an automorphism of $A_6$ carrying a natural point stabilizer $A_5$ onto $\rho(H)$. Thus $H\cong\rho(H)\cong A_5$.
>
> **(c)** Apply (a) to $H=A_5$ and let $K\le A_6$ be the image of its conjugation action on its six Sylow $5$-subgroups. This action is transitive, whereas every natural point stabilizer $H_i\le A_6$ fixes a point; hence $K\ne H_i$ for all $i$. Exercise 40 gives an automorphism $\alpha$ of $A_6$ with $\alpha(H_1)=K$. If $\alpha$ came from conjugation in $S_6$, Exercise 40 would force $K=H_i$ for some $i$, a contradiction. Thus $\alpha$ is outer in the stated sense.

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Simple Groups|Simple Groups]]
- [[01 - Group Theory/Exercises/Exercise G309 - Index n Subgroups of Alternating Groups|Exercise G309]]

## Notes

- **Meaning of part (c):** The automorphism is not the restriction to $A_6$ of conjugation by any element of $S_6$.
- **Source status:** [S2, Ch. I, Ex. 41, printed p. 79, PDF p. 94]. The construction is independently derived from Exercises 40-41.

