"""New migration

Revision ID: 9a722debd052
Revises: fa24a92d89ae
Create Date: 2023-06-30 00:00:58.884274

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9a722debd052'
down_revision = 'fa24a92d89ae'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('companys_description_key', 'companys', type_='unique')
    op.drop_constraint('companys_users_id_fkey', 'companys', type_='foreignkey')
    op.drop_column('companys', 'users_id')
    op.create_unique_constraint(None, 'users', ['type_user_id'])
    op.create_foreign_key(None, 'users', 'type_users', ['type_user_id'], ['id'], ondelete='SET NULL')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='foreignkey')
    op.drop_constraint(None, 'users', type_='unique')
    op.add_column('companys', sa.Column('users_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('companys_users_id_fkey', 'companys', 'users', ['users_id'], ['id'], ondelete='SET NULL')
    op.create_unique_constraint('companys_description_key', 'companys', ['description'])
    # ### end Alembic commands ###