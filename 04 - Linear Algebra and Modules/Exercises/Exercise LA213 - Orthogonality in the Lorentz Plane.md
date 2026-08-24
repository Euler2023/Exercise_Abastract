---
title: "Exercise LA213: Orthogonality in the Lorentz Plane"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - indefinite-forms
  - orthogonality
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.4, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA213: Orthogonality in the Lorentz Plane

## Problem Statement

> [!question] Exercise 4.4
> Make a sketch showing the positions of some orthogonal vectors in $\mathbb R^2$, when the form is
>
> $$
> (X,Y)=x_1y_1-x_2y_2.
> $$

## Hints

> [!hint]- Hint 1
> If $X=(a,b)^{\mathsf T}$, test the vector $(b,a)^{\mathsf T}$.

> [!hint]- Hint 2
> The lines $x_2=\pm x_1$ consist of self-orthogonal vectors.

## Solution

> [!success]- Solution
> For $u=(a,b)^{\mathsf T}$, the vector $v=(b,a)^{\mathsf T}$ satisfies
>
> $$
> (u,v)=ab-ba=0.
> $$
>
> Thus the operation $(a,b)\mapsto(b,a)$ gives an orthogonal direction. For example,
>
> $$
> u=(2,1)^{\mathsf T},
> \qquad
> v=(1,2)^{\mathsf T},
> \qquad
> (u,v)=2-2=0.
> $$
>
> Unlike Euclidean orthogonality, these vectors do not meet at a Euclidean right angle. The null directions $x_2=x_1$ and $x_2=-x_1$ are self-orthogonal because $x_1^2-x_2^2=0$ there.
>
> ![[Attachments/artin-algebra-2e-ch08-ex-4.4-indefinite-orthogonality.png]]

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

- **Constructed figure:** New TikZ construction derived from the equation in the exercise; it is not a crop or redraw of a source figure. Editable source: [[Attachments/artin-algebra-2e-ch08-ex-4.4-indefinite-orthogonality.tex|TikZ]]. Vector output: [[Attachments/artin-algebra-2e-ch08-ex-4.4-indefinite-orthogonality.pdf|PDF]].
- **Source status:** The statement and form were visually verified at [S1, Ch. 8, §4, Ex. 4.4, printed p. 254, PDF p. 266]. The solution and figure are independent constructions.

